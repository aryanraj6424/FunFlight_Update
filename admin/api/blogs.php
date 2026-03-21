<?php
require_once 'config.php';

$conn = getDBConnection();

$method = $_SERVER['REQUEST_METHOD'];
$request_uri = $_SERVER['REQUEST_URI'];
$path = parse_url($request_uri, PHP_URL_PATH);

// Get all blogs
if ($method == 'GET' && $path == '/admin/api/blogs.php') {
    $sql = "SELECT * FROM blogs ORDER BY created_at DESC";
    $result = $conn->query($sql);
    
    $blogs = [];
    if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
            $blogs[] = $row;
        }
    }
    
    echo json_encode($blogs);
}

// Create new blog
elseif ($method == 'POST' && $path == '/admin/api/blogs.php') {
    $data = json_decode(file_get_contents('php://input'), true);
    
    $title = $data['title'] ?? '';
    $category = $data['category'] ?? 'General';
    $excerpt = $data['excerpt'] ?? '';
    $content = $data['content'] ?? '';
    $image = $data['image'] ?? '';
    
    if (empty($title) || empty($content)) {
        http_response_code(400);
        echo json_encode(['error' => 'Title and content are required']);
        exit;
    }
    
    // Generate slug
    $slug = strtolower(trim($title));
    $slug = preg_replace('/[^a-z0-9]+/', '-', $slug);
    $slug = trim($slug, '-');
    
    // Generate date
    $date = date('M d, Y');
    
    $sql = "INSERT INTO blogs (title, slug, category, excerpt, content, image, date) VALUES (?, ?, ?, ?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sssssss", $title, $slug, $category, $excerpt, $content, $image, $date);
    
    if ($stmt->execute()) {
        $blog_id = $conn->insert_id;
        echo json_encode([
            'id' => $blog_id,
            'title' => $title,
            'slug' => $slug,
            'category' => $category,
            'excerpt' => $excerpt,
            'content' => $content,
            'image' => $image,
            'date' => $date
        ]);
    } else {
        http_response_code(500);
        echo json_encode(['error' => 'Failed to create blog']);
    }
    
    $stmt->close();
}

// Delete blog
elseif ($method == 'DELETE' && preg_match('/\/admin\/api\/blogs\.php\/(\d+)$/', $path, $matches)) {
    $blog_id = $matches[1];
    
    $sql = "DELETE FROM blogs WHERE id = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $blog_id);
    
    if ($stmt->execute()) {
        echo json_encode(['message' => 'Blog deleted successfully']);
    } else {
        http_response_code(500);
        echo json_encode(['error' => 'Failed to delete blog']);
    }
    
    $stmt->close();
}

else {
    http_response_code(404);
    echo json_encode(['error' => 'Endpoint not found']);
}

$conn->close();
?>
