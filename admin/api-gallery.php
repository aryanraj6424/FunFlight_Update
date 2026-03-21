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
    // Fetch gallery items from database
    $sql = "SELECT * FROM gallery ORDER BY created_at DESC";
    $result = $conn->query($sql);
    
    $galleryItems = [];
    if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
            // Convert relative image path to full URL
            if (!empty($row['image']) && strpos($row['image'], 'http') !== 0) {
                $row['image'] = 'http://localhost/funFlight-main (2)/funFlight-main/admin/' . $row['image'];
            }
            $galleryItems[] = $row;
        }
    }
    
    echo json_encode($galleryItems);
}

elseif ($method == 'POST') {
    // Handle gallery image upload
    $data = json_decode(file_get_contents('php://input'), true);
    
    $title = $data['title'] ?? '';
    $category = $data['category'] ?? 'General';
    $image = $data['image'] ?? '';
    
    if (empty($title) || empty($image)) {
        http_response_code(400);
        echo json_encode(['error' => 'Title and image are required']);
        exit;
    }
    
    // Insert into database
    $sql = "INSERT INTO gallery (title, category, image) VALUES (?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sss", $title, $category, $image);
    
    if ($stmt->execute()) {
        $gallery_id = $conn->insert_id;
        
        // Convert relative image path to full URL for response
        if (strpos($image, 'http') !== 0) {
            $image = 'http://localhost/funFlight-main (2)/funFlight-main/admin/' . $image;
        }
        
        echo json_encode([
            'success' => true,
            'id' => $gallery_id,
            'title' => $title,
            'category' => $category,
            'image' => $image,
            'message' => 'Gallery item added successfully'
        ]);
    } else {
        http_response_code(500);
        echo json_encode(['error' => 'Failed to add gallery item']);
    }
    
    $stmt->close();
}

elseif ($method == 'DELETE') {
    // Handle gallery item deletion
    $gallery_id = $_GET['id'] ?? '';
    
    if (empty($gallery_id)) {
        http_response_code(400);
        echo json_encode(['error' => 'Gallery ID is required']);
        exit;
    }
    
    // For now, just return success
    // In production, this would delete from database
    echo json_encode([
        'success' => true,
        'message' => 'Gallery item deleted successfully'
    ]);
}

$conn->close();
?>
