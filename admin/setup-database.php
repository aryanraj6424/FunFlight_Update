<?php
// Database connection
$conn = new mysqli('localhost', 'root', '', 'funflight');
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

echo "<h2>Setting up Fun Flight Database Tables...</h2>";

// 1. Create Gallery Table
$gallerySql = "CREATE TABLE IF NOT EXISTS gallery (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    category VARCHAR(100) DEFAULT 'General',
    image VARCHAR(500) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)";

if ($conn->query($gallerySql) === TRUE) {
    echo "✅ Gallery table created successfully<br>";
} else {
    echo "❌ Error creating gallery table: " . $conn->error . "<br>";
}

// 2. Create Contacts Table
$contactsSql = "CREATE TABLE IF NOT EXISTS contacts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50),
    message TEXT NOT NULL,
    status ENUM('New', 'Responded') DEFAULT 'New',
    date DATE DEFAULT CURRENT_DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)";

if ($conn->query($contactsSql) === TRUE) {
    echo "✅ Contacts table created successfully<br>";
} else {
    echo "❌ Error creating contacts table: " . $conn->error . "<br>";
}

// 3. Insert sample gallery data
$galleryCheck = $conn->query("SELECT COUNT(*) as count FROM gallery");
$galleryCount = $galleryCheck->fetch_assoc()['count'];

if ($galleryCount == 0) {
    $insertGallerySql = "INSERT INTO gallery (title, category, image) VALUES (?, ?, ?)";
    $stmt = $conn->prepare($insertGallerySql);
    
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
    $stmt->close();
    echo "✅ Sample gallery data inserted<br>";
} else {
    echo "ℹ️ Gallery table already has data (" . $galleryCount . " items)<br>";
}

// 4. Insert sample contact data
$contactsCheck = $conn->query("SELECT COUNT(*) as count FROM contacts");
$contactsCount = $contactsCheck->fetch_assoc()['count'];

if ($contactsCount == 0) {
    $insertContactsSql = "INSERT INTO contacts (name, email, phone, message, status, date) VALUES (?, ?, ?, ?, ?, ?)";
    $stmt = $conn->prepare($insertContactsSql);
    
    $sampleContacts = [
        ['John Smith', 'john.smith@email.com', '+1 (555) 123-4567', 'I\'m interested in learning more about your flight training programs. Could you please send me more information about the private pilot course?', 'New', '2026-03-15'],
        ['Sarah Johnson', 'sarah.j@email.com', '+1 (555) 987-6543', 'Looking for instrument rating training. Do you offer weekend classes?', 'Responded', '2026-03-14'],
        ['Michael Chen', 'm.chen@email.com', '+1 (555) 456-7890', 'What are the requirements for commercial pilot training? I have some flight experience from military service.', 'New', '2026-03-13']
    ];
    
    foreach ($sampleContacts as $contact) {
        $stmt->bind_param("ssssss", $contact[0], $contact[1], $contact[2], $contact[3], $contact[4], $contact[5]);
        $stmt->execute();
    }
    $stmt->close();
    echo "✅ Sample contact data inserted<br>";
} else {
    echo "ℹ️ Contacts table already has data (" . $contactsCount . " items)<br>";
}

// 5. Display table structures
echo "<br><h3>Database Structure:</h3>";
echo "<h4>Gallery Table:</h4>";
echo "<pre>";
echo "CREATE TABLE gallery (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    category VARCHAR(100) DEFAULT 'General',
    image VARCHAR(500) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)";
echo "</pre>";

echo "<h4>Contacts Table:</h4>";
echo "<pre>";
echo "CREATE TABLE contacts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50),
    message TEXT NOT NULL,
    status ENUM('New', 'Responded') DEFAULT 'New',
    date DATE DEFAULT CURRENT_DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)";
echo "</pre>";

// 6. Test data retrieval
echo "<br><h3>Testing Data Retrieval:</h3>";

// Test gallery
$galleryResult = $conn->query("SELECT COUNT(*) as count FROM gallery");
$galleryCount = $galleryResult->fetch_assoc()['count'];
echo "Gallery items: " . $galleryCount . "<br>";

// Test contacts
$contactsResult = $conn->query("SELECT COUNT(*) as count FROM contacts");
$contactsCount = $contactsResult->fetch_assoc()['count'];
echo "Contact submissions: " . $contactsCount . "<br>";

echo "<br><h3>✅ Database setup complete!</h3>";
echo "<p>You can now:</p>";
echo "<ul>";
echo "<li>Upload images in the admin gallery page</li>";
echo "<li>Submit contact forms from the contact page</li>";
echo "<li>View both in the admin dashboard</li>";
echo "</ul>";

$conn->close();
?>
