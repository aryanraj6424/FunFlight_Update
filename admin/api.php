<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
header("Content-Type: application/json");

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    exit(0);
}

// Simple database connection
$conn = new mysqli('localhost', 'root', '', 'funflight');
if ($conn->connect_error) {
    die(json_encode(['error' => 'Database connection failed']));
}

$method = $_SERVER['REQUEST_METHOD'];

if ($method == 'GET') {
    $sql = "SELECT * FROM blogs ORDER BY created_at DESC";
    $result = $conn->query($sql);
    
    $blogs = [];
    if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
            // Convert relative image path to full URL
            if (!empty($row['image']) && strpos($row['image'], 'http') !== 0) {
                $row['image'] = 'http://localhost/funFlight-main (2)/funFlight-main/admin/' . $row['image'];
            }
            $blogs[] = $row;
        }
    }
    
    echo json_encode($blogs);
}

elseif ($method == 'POST') {
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
    
    $slug = strtolower(trim($title));
    $slug = preg_replace('/[^a-z0-9]+/', '-', $slug);
    $slug = trim($slug, '-');
    
    $date = date('M d, Y');
    
    $sql = "INSERT INTO blogs (title, slug, category, excerpt, content, image, date) VALUES (?, ?, ?, ?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sssssss", $title, $slug, $category, $excerpt, $content, $image, $date);
    
    if ($stmt->execute()) {
        $blog_id = $conn->insert_id;
        
        // Convert relative image path to full URL for response
        if (!empty($image) && strpos($image, 'http') !== 0) {
            $image = 'http://localhost/funFlight-main (2)/funFlight-main/admin/' . $image;
        }
        
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

$conn->close();
?>
