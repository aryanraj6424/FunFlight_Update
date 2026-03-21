<?php
// Create gallery table
$conn = new mysqli('localhost', 'root', '', 'funflight');
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "CREATE TABLE IF NOT EXISTS gallery (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    category VARCHAR(100) DEFAULT 'General',
    image VARCHAR(500) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)";

if ($conn->query($sql) === TRUE) {
    echo "Gallery table created successfully";
    
    // Insert sample data
    $insertSql = "INSERT INTO gallery (title, category, image) VALUES (?, ?, ?)";
    $stmt = $conn->prepare($insertSql);
    
    $sampleImages = [
        ['Checkride Success', 'Training', 'uploads/1773665357_slava-auchynnikau-uh_nvn43P3Y-unsplash.jpg'],
        ['Cessna 172 Training', 'Fleet', 'https://images.unsplash.com/photo-1559827265-dfaed193a3d9?auto=format&fit=crop&w=800'],
        ['Student Solo Flight', 'Student Tips', 'https://images.unsplash.com/photo-1584293240633-1125b5c7e6a3?auto=format&fit=crop&w=800'],
        ['Our Flight Fleet', 'Fleet', 'https://images.unsplash.com/photo-1592593482752-1b9c6d5b5b5c?auto=format&fit=crop&w=800'],
        ['Lakeland Airport View', 'General', 'https://images.unsplash.com/photo-1504607798333-52a30db54a5d?auto=format&fit=crop&w=800'],
        ['Instrument Training', 'Training', 'https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&w=800']
    ];
    
    foreach ($sampleImages as $image) {
        $stmt->bind_param("sss", $image[0], $image[1], $image[2]);
        $stmt->execute();
    }
    
    echo "<br>Sample gallery data inserted";
} else {
    echo "Error creating table: " . $conn->error;
}

$conn->close();
?>
