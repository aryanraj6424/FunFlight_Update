<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
header("Content-Type: application/json");

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    exit(0);
}

// Enable error reporting for debugging
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Simple database connection
$conn = new mysqli('localhost', 'root', '', 'funflight');
if ($conn->connect_error) {
    http_response_code(500);
    echo json_encode(['error' => 'Database connection failed: ' . $conn->connect_error]);
    exit;
}

$method = $_SERVER['REQUEST_METHOD'];

if ($method == 'GET') {
    // Get all contact leads from database
    $sql = "SELECT * FROM contacts ORDER BY created_at DESC";
    $result = $conn->query($sql);
    
    if (!$result) {
        http_response_code(500);
        echo json_encode(['error' => 'Query failed: ' . $conn->error]);
        exit;
    }
    
    $contacts = [];
    if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
            $contacts[] = $row;
        }
    }
    
    echo json_encode($contacts);
}

elseif ($method == 'POST') {
    // Handle new contact submission
    $json_input = file_get_contents('php://input');
    if ($json_input === false) {
        http_response_code(400);
        echo json_encode(['error' => 'No data received']);
        exit;
    }
    
    $data = json_decode($json_input, true);
    
    if (json_last_error() !== JSON_ERROR_NONE) {
        http_response_code(400);
        echo json_encode(['error' => 'Invalid JSON: ' . json_last_error_msg()]);
        exit;
    }
    
    $name = $data['name'] ?? '';
    $email = $data['email'] ?? '';
    $phone = $data['phone'] ?? '';
    $message = $data['message'] ?? '';
    
    // Validate required fields
    if (empty($name) || empty($email) || empty($message)) {
        http_response_code(400);
        echo json_encode(['error' => 'Name, email, and message are required']);
        exit;
    }
    
    // Validate email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo json_encode(['error' => 'Invalid email address']);
        exit;
    }
    
    // Insert into contacts table
    $sql = "INSERT INTO contacts (name, email, phone, message, status, date) VALUES (?, ?, ?, ?, 'New', CURDATE())";
    $stmt = $conn->prepare($sql);
    
    if ($stmt === false) {
        http_response_code(500);
        echo json_encode(['error' => 'Prepare failed: ' . $conn->error]);
        exit;
    }
    
    $stmt->bind_param("ssss", $name, $email, $phone, $message);
    
    if ($stmt->execute()) {
        $contact_id = $conn->insert_id;
        echo json_encode([
            'success' => true,
            'id' => $contact_id,
            'message' => 'Contact form submitted successfully'
        ]);
    } else {
        http_response_code(500);
        echo json_encode(['error' => 'Failed to submit contact form: ' . $stmt->error]);
    }
    
    $stmt->close();
}

elseif ($method == 'DELETE') {
    // Handle contact deletion
    $contact_id = $_GET['id'] ?? '';
    
    if (empty($contact_id) || !is_numeric($contact_id)) {
        http_response_code(400);
        echo json_encode(['error' => 'Valid Contact ID is required']);
        exit;
    }
    
    $sql = "DELETE FROM contacts WHERE id = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $contact_id);
    
    if ($stmt->execute()) {
        echo json_encode([
            'success' => true,
            'message' => 'Contact deleted successfully'
        ]);
    } else {
        http_response_code(500);
        echo json_encode(['error' => 'Failed to delete contact']);
    }
    
    $stmt->close();
}

elseif ($method == 'PUT') {
    // Handle contact status update
    $json_input = file_get_contents('php://input');
    $data = json_decode($json_input, true);
    
    $contact_id = $data['id'] ?? '';
    $status = $data['status'] ?? '';
    
    if (empty($contact_id) || !is_numeric($contact_id) || empty($status)) {
        http_response_code(400);
        echo json_encode(['error' => 'Contact ID and status are required']);
        exit;
    }
    
    if (!in_array($status, ['New', 'Responded'])) {
        http_response_code(400);
        echo json_encode(['error' => 'Invalid status']);
        exit;
    }
    
    $sql = "UPDATE contacts SET status = ? WHERE id = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("si", $status, $contact_id);
    
    if ($stmt->execute()) {
        echo json_encode([
            'success' => true,
            'message' => 'Contact status updated successfully'
        ]);
    } else {
        http_response_code(500);
        echo json_encode(['error' => 'Failed to update contact status']);
    }
    
    $stmt->close();
}

$conn->close();
?>
