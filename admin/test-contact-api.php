<?php
// Test if the contacts table exists and works
$conn = new mysqli('localhost', 'root', '', 'funflight');
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

echo "<h2>Testing Contact API</h2>";

// Check if contacts table exists
$result = $conn->query("SHOW TABLES LIKE 'contacts'");
if ($result->num_rows > 0) {
    echo "✅ Contacts table exists<br>";
    
    // Check table structure
    $structure = $conn->query("DESCRIBE contacts");
    echo "<h3>Table Structure:</h3>";
    echo "<table border='1'>";
    echo "<tr><th>Field</th><th>Type</th><th>Null</th><th>Key</th></tr>";
    while ($row = $structure->fetch_assoc()) {
        echo "<tr><td>{$row['Field']}</td><td>{$row['Type']}</td><td>{$row['Null']}</td><td>{$row['Key']}</td></tr>";
    }
    echo "</table>";
    
    // Test INSERT
    echo "<h3>Testing INSERT:</h3>";
    $test_name = "Test User";
    $test_email = "test@example.com";
    $test_phone = "+1234567890";
    $test_message = "This is a test message";
    
    $sql = "INSERT INTO contacts (name, email, phone, message, status, date) VALUES (?, ?, ?, ?, 'New', CURDATE())";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ssss", $test_name, $test_email, $test_phone, $test_message);
    
    if ($stmt->execute()) {
        echo "✅ Test INSERT successful<br>";
        $insert_id = $conn->insert_id;
        echo "Inserted ID: $insert_id<br>";
        
        // Test SELECT
        echo "<h3>Testing SELECT:</h3>";
        $result = $conn->query("SELECT * FROM contacts WHERE id = $insert_id");
        if ($row = $result->fetch_assoc()) {
            echo "<pre>";
            print_r($row);
            echo "</pre>";
        }
        
        // Clean up test data
        $conn->query("DELETE FROM contacts WHERE id = $insert_id");
        echo "✅ Test data cleaned up<br>";
    } else {
        echo "❌ Test INSERT failed: " . $stmt->error . "<br>";
    }
    $stmt->close();
    
} else {
    echo "❌ Contacts table does not exist<br>";
    echo "Creating contacts table...<br>";
    
    $create_sql = "CREATE TABLE IF NOT EXISTS contacts (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(50),
        message TEXT NOT NULL,
        status ENUM('New', 'Responded') DEFAULT 'New',
        date DATE DEFAULT CURRENT_DATE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )";
    
    if ($conn->query($create_sql) === TRUE) {
        echo "✅ Contacts table created successfully<br>";
    } else {
        echo "❌ Error creating table: " . $conn->error . "<br>";
    }
}

$conn->close();
?>
