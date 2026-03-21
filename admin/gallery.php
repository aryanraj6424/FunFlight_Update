<?php
session_start();

// Check if user is logged in
if (!isset($_SESSION['admin_logged_in'])) {
    header('Location: login.php');
    exit;
}

// Database connection
$conn = new mysqli('localhost', 'root', '', 'funflight');
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Handle form submission
if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['action'])) {
    if ($_POST['action'] == 'create') {
        $category = $_POST['category'] ?? 'General';
        
        // Handle image upload
        $image = '';
        if (isset($_FILES['image']) && $_FILES['image']['error'] == 0) {
            $upload_dir = 'uploads/';
            if (!file_exists($upload_dir)) {
                mkdir($upload_dir, 0777, true);
            }
            
            $file_name = time() . '_' . basename($_FILES['image']['name']);
            $target_file = $upload_dir . $file_name;
            
            if (move_uploaded_file($_FILES['image']['tmp_name'], $target_file)) {
                $image = $upload_dir . $file_name;
                $success = "Gallery item uploaded successfully!";
            } else {
                $error = "Failed to upload image";
            }
        } else {
            $error = "Please select an image file";
        }
        
        if (!empty($image)) {
            // Generate auto title from filename
            $title = pathinfo($file_name, PATHINFO_FILENAME);
            $title = ucwords(str_replace(['_', '-'], ' ', $title));
            
            $sql = "INSERT INTO gallery (title, category, image) VALUES (?, ?, ?)";
            $stmt = $conn->prepare($sql);
            $stmt->bind_param("sss", $title, $category, $image);
            
            if ($stmt->execute()) {
                $success = "Gallery item added successfully!";
            } else {
                $error = "Failed to save to database";
            }
            $stmt->close();
        }
    }
}

// Handle deletion
if (isset($_GET['delete']) && is_numeric($_GET['delete'])) {
    $gallery_id = $_GET['delete'];
    
    // Get image path before deletion
    $result = $conn->query("SELECT image FROM gallery WHERE id = $gallery_id");
    if ($row = $result->fetch_assoc()) {
        $image_path = $row['image'];
        
        // Delete from database
        $sql = "DELETE FROM gallery WHERE id = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("i", $gallery_id);
        
        if ($stmt->execute()) {
            // Delete file from server
            if (file_exists($image_path)) {
                unlink($image_path);
            }
            $success = "Gallery item deleted successfully!";
        }
        $stmt->close();
    }
}

// Get all gallery items
$galleryItems = [];
$result = $conn->query("SELECT * FROM gallery ORDER BY created_at DESC");
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $galleryItems[] = $row;
    }
}
$conn->close();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Update Gallery - Fun Flight Admin</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <style>
        body {
            background: linear-gradient(135deg, #0a1525 0%, #1a2c42 100%);
            font-family: 'Inter', sans-serif;
        }
        .sidebar {
            background: #001a35;
            border-right: 1px solid rgba(255, 255, 255, 0.05);
        }
        .card {
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .text-accent {
            color: #c5a059;
        }
        .text-blue {
            color: #38bdf8;
        }
        .btn-primary {
            background: #c5a059;
            color: #000;
        }
        .btn-primary:hover {
            background: #d4b068;
        }
        /* Remove any title tooltips */
        img {
            pointer-events: none;
        }
        .group:hover img {
            pointer-events: auto;
        }
        /* Prevent any browser tooltips */
        img[title], img[alt] {
            title: "";
            alt: "";
        }
        /* Remove any potential data attributes */
        *[data-title], *[data-tooltip] {
            pointer-events: none;
        }
    </style>
</head>
<body class="min-h-screen text-white">
    <div class="flex">
        <!-- Sidebar -->
        <div class="sidebar w-72 min-h-screen p-8 fixed left-0 top-0">
            <div class="mb-12 pb-6 border-b border-white/5">
                <h2 class="text-sm font-black tracking-[0.3em] text-blue">FUN FLIGHT</h2>
                <p class="text-[10px] text-white/40 uppercase tracking-widest mt-1">Admin Terminal</p>
            </div>
            
            <nav class="space-y-4">
                <a href="index.php" class="w-full flex items-center gap-4 px-5 py-4 rounded-xl transition-all text-white/50 hover:text-white">
                    <i class="fas fa-tachometer-alt"></i>
                    <span class="font-bold text-sm">Dashboard</span>
                </a>
                <a href="blogs.php" class="w-full flex items-center gap-4 px-5 py-4 rounded-xl transition-all text-white/50 hover:text-white">
                    <i class="fas fa-file-alt"></i>
                    <span class="font-bold text-sm">Manage Blogs</span>
                </a>
                <a href="gallery.php" class="w-full flex items-center gap-4 px-5 py-4 rounded-xl transition-all text-white border border-accent/50">
                    <i class="fas fa-images text-accent"></i>
                    <span class="font-bold text-sm">Update Gallery</span>
                </a>
                <a href="contacts.php" class="w-full flex items-center gap-4 px-5 py-4 rounded-xl transition-all text-white/50 hover:text-white">
                    <i class="fas fa-users"></i>
                    <span class="font-bold text-sm">Contact Leads</span>
                </a>
            </nav>
            
            <div class="mt-auto pt-8 border-t border-white/5">
                <a href="logout.php" class="w-full flex items-center gap-4 text-white/40 hover:text-red-400 transition-all text-xs font-bold uppercase tracking-widest">
                    <i class="fas fa-sign-out-alt"></i>
                    Sign Out
                </a>
            </div>
        </div>
        
        <!-- Main Content -->
        <div class="flex-1 ml-72">
            <header class="px-12 py-10">
                <div class="flex justify-between items-start">
                    <div>
                        <div class="flex items-center gap-3 mb-1">
                            <div class="w-1 h-8 bg-blue rounded-full"></div>
                            <h1 class="text-4xl font-bold text-accent tracking-tight uppercase">Gallery Panel</h1>
                        </div>
                        <p class="text-white/40 text-sm ml-4 uppercase tracking-widest">System Control / Gallery</p>
                    </div>
                    <div class="w-10 h-10 bg-[#001a35] rounded-full border border-accent/30 flex items-center justify-center text-accent font-bold">
                        A
                    </div>
                </div>
            </header>
            
            <div class="px-12 pb-20">
                <?php if (isset($success)): ?>
                    <div class="bg-green-500/20 border border-green-500/30 text-green-400 px-4 py-3 rounded-lg mb-6">
                        <?php echo $success; ?>
                    </div>
                <?php endif; ?>
                
                <?php if (isset($error)): ?>
                    <div class="bg-red-500/20 border border-red-500/30 text-red-400 px-4 py-3 rounded-lg mb-6">
                        <?php echo $error; ?>
                    </div>
                <?php endif; ?>
                
                <!-- Upload Section -->
                <div class="card p-8 rounded-[2.5rem] mb-8">
                    <h3 class="text-lg font-bold text-white mb-6 flex items-center gap-2">
                        <i class="fas fa-plus text-accent"></i>
                        Add New Gallery Image
                    </h3>
                    
                    <form method="POST" enctype="multipart/form-data" class="space-y-6">
                        <input type="hidden" name="action" value="create">
                        
                        <div>
                            <label class="block text-white/40 text-xs uppercase font-bold tracking-widest mb-2">Select Image File</label>
                            <div class="relative h-14 bg-black/40 border border-white/10 rounded-2xl flex items-center px-4 overflow-hidden">
                                <input type="file" name="image" accept="image/*" class="absolute inset-0 opacity-0 cursor-pointer z-10" />
                                <div class="flex items-center gap-3 text-white/60">
                                    <i class="fas fa-cloud-upload-alt text-blue"></i>
                                    <span class="text-xs truncate">Click to Browse Computer</span>
                                </div>
                            </div>
                        </div>
                        
                        <div>
                            <label class="block text-white/40 text-xs uppercase font-bold tracking-widest mb-2">Category</label>
                            <select name="category" class="w-full h-14 bg-black/40 border border-white/10 p-4 rounded-2xl text-white outline-none focus:border-accent">
                                <option value="General">General</option>
                                <option value="Training">Training</option>
                                <option value="Fleet">Fleet</option>
                                <option value="Events">Events</option>
                            </select>
                        </div>
                        
                        <button type="submit" class="btn-primary h-14 px-8 rounded-2xl hover:scale-105 transition-transform flex items-center gap-2 text-black font-bold uppercase text-[10px] tracking-widest">
                            <i class="fas fa-plus"></i> Add to Gallery
                        </button>
                    </form>
                </div>
                
                <!-- Gallery Grid -->
                <div class="space-y-4">
                    <h3 class="text-white/40 font-bold uppercase tracking-widest text-xs">Gallery Assets (<?php echo count($galleryItems); ?> items)</h3>
                    
                    <?php if (empty($galleryItems)): ?>
                        <div class="card p-12 rounded-xl text-center">
                            <i class="fas fa-images text-4xl text-white/20 mb-4"></i>
                            <p class="text-white/40">No gallery items yet. Upload your first image above.</p>
                        </div>
                    <?php else: ?>
                        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            <?php foreach ($galleryItems as $item): ?>
                                <div class="group relative aspect-square rounded-[2rem] overflow-hidden border border-white/10 bg-black/20">
                                    <img src="<?php echo strpos($item['image'], 'http') === 0 ? htmlspecialchars($item['image']) : htmlspecialchars($item['image']); ?>" 
                                         class="w-full h-full object-cover transition-all group-hover:scale-110" />
                                    
                                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-end p-4">
                                        <div class="flex gap-2">
                                            <a href="<?php echo strpos($item['image'], 'http') === 0 ? $item['image'] : $item['image']; ?>" 
                                               target="_blank" 
                                               class="bg-white/20 text-white p-2 rounded-lg hover:bg-white/30 transition-colors">
                                                <i class="fas fa-external-link-alt text-xs"></i>
                                            </a>
                                            <a href="?delete=<?php echo $item['id']; ?>" 
                                               onclick="return confirm('Delete this gallery item?')"
                                               class="bg-red-500/20 text-red-400 p-2 rounded-lg hover:bg-red-500 hover:text-white transition-colors">
                                                <i class="fas fa-trash text-xs"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            <?php endforeach; ?>
                        </div>
                    <?php endif; ?>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
