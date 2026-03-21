<?php
session_start();

// Check if user is logged in
if (!isset($_SESSION['admin_logged_in'])) {
    header('Location: login.php');
    exit;
}

// Simple database connection
$conn = new mysqli('localhost', 'root', '', 'funflight');
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Handle form submission
if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['action'])) {
    if ($_POST['action'] == 'create') {
        $title = $_POST['title'] ?? '';
        $category = $_POST['category'] ?? 'General';
        $excerpt = $_POST['excerpt'] ?? '';
        $content = $_POST['content'] ?? '';
        
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
                $image = $target_file;
            }
        }
        
        if (!empty($title) && !empty($content)) {
            $slug = strtolower(trim($title));
            $slug = preg_replace('/[^a-z0-9]+/', '-', $slug);
            $slug = trim($slug, '-');
            
            $date = date('M d, Y');
            
            $sql = "INSERT INTO blogs (title, slug, category, excerpt, content, image, date) VALUES (?, ?, ?, ?, ?, ?, ?)";
            $stmt = $conn->prepare($sql);
            $stmt->bind_param("sssssss", $title, $slug, $category, $excerpt, $content, $image, $date);
            
            if ($stmt->execute()) {
                $success = "Blog created successfully!";
            } else {
                $error = "Failed to create blog";
            }
            $stmt->close();
        } else {
            $error = "Title and content are required";
        }
    }
}

// Handle deletion
if (isset($_GET['delete']) && is_numeric($_GET['delete'])) {
    $blog_id = $_GET['delete'];
    
    // Get image path before deletion
    $sql = "SELECT image FROM blogs WHERE id = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $blog_id);
    $stmt->execute();
    $result = $stmt->get_result();
    $blog = $result->fetch_assoc();
    
    if ($blog && !empty($blog['image']) && file_exists($blog['image'])) {
        unlink($blog['image']);
    }
    
    $sql = "DELETE FROM blogs WHERE id = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $blog_id);
    
    if ($stmt->execute()) {
        $success = "Blog deleted successfully!";
    }
    $stmt->close();
}

// Get all blogs
$blogs = [];
$result = $conn->query("SELECT * FROM blogs ORDER BY created_at DESC");
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $blogs[] = $row;
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Manage Blogs - Fun Flight Admin</title>
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
        .btn-primary {
            background: #c5a059;
            color: #000;
        }
        .btn-primary:hover {
            background: #d4b068;
        }
        .text-accent {
            color: #c5a059;
        }
        .text-blue {
            color: #38bdf8;
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
                <a href="blogs.php" class="w-full flex items-center gap-4 px-5 py-4 rounded-xl transition-all text-white border border-accent/50">
                    <i class="fas fa-file-alt text-accent"></i>
                    <span class="font-bold text-sm">Manage Blogs</span>
                </a>
                <a href="gallery.php" class="w-full flex items-center gap-4 px-5 py-4 rounded-xl transition-all text-white/50 hover:text-white">
                    <i class="fas fa-images"></i>
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
                            <h1 class="text-4xl font-bold text-accent tracking-tight uppercase">Blogs Panel</h1>
                        </div>
                        <p class="text-white/40 text-sm ml-4 uppercase tracking-widest">System Control / Blogs</p>
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
                
                <!-- Create Blog Form -->
                <div class="card p-8 rounded-[2.5rem] mb-8">
                    <h3 class="text-lg font-bold text-white mb-6 flex items-center gap-2">
                        <i class="fas fa-plus text-accent"></i>
                        Create New Blog
                    </h3>
                    
                    <form method="POST" enctype="multipart/form-data" class="space-y-6">
                        <input type="hidden" name="action" value="create">
                        
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label class="block text-white/40 text-xs uppercase font-bold tracking-widest mb-2">Mission Title</label>
                                <input type="text" name="title" required
                                       class="w-full bg-black/40 border border-white/10 p-4 rounded-xl text-white outline-none focus:border-accent transition-colors"
                                       placeholder="Enter blog title">
                            </div>
                            
                            <div>
                                <label class="block text-white/40 text-xs uppercase font-bold tracking-widest mb-2">Category</label>
                                <select name="category" class="w-full bg-black/40 border border-white/10 p-4 rounded-xl text-white outline-none focus:border-accent transition-colors">
                                    <option value="General">General</option>
                                    <option value="Training">Training</option>
                                    <option value="Student Tips">Student Tips</option>
                                    <option value="Fleet">Fleet</option>
                                </select>
                            </div>
                        </div>
                        
                        <div>
                            <label class="block text-white/40 text-xs uppercase font-bold tracking-widest mb-2">Mission Image</label>
                            <div class="relative border-2 border-dashed border-white/10 rounded-xl p-6 text-center hover:border-accent/50 transition-colors">
                                <input type="file" name="image" accept="image/*" class="absolute inset-0 opacity-0 cursor-pointer">
                                <i class="fas fa-cloud-upload-alt text-3xl text-white/40 mb-2"></i>
                                <p class="text-white/40 text-sm">Click to upload image</p>
                            </div>
                        </div>
                        
                        <div>
                            <label class="block text-white/40 text-xs uppercase font-bold tracking-widest mb-2">Brief Excerpt</label>
                            <textarea name="excerpt" rows="3"
                                      class="w-full bg-black/40 border border-white/10 p-4 rounded-xl text-white outline-none focus:border-accent transition-colors"
                                      placeholder="Short description..."></textarea>
                        </div>
                        
                        <div>
                            <label class="block text-white/40 text-xs uppercase font-bold tracking-widest mb-2">Main Intelligence</label>
                            <textarea name="content" rows="8" required
                                      class="w-full bg-black/40 border border-white/10 p-4 rounded-xl text-white outline-none focus:border-accent transition-colors"
                                      placeholder="Full blog content..."></textarea>
                        </div>
                        
                        <button type="submit" class="btn-primary font-black py-4 rounded-xl uppercase tracking-widest text-sm hover:scale-105 transition-all">
                            <i class="fas fa-paper-plane mr-2"></i>
                            Publish Intel
                        </button>
                    </form>
                </div>
                
                <!-- Blogs List -->
                <div class="space-y-4">
                    <h3 class="text-white/40 font-bold uppercase tracking-widest text-xs">Published Articles</h3>
                    
                    <?php if (empty($blogs)): ?>
                        <div class="card p-12 rounded-[2.5rem] text-center">
                            <i class="fas fa-file-alt text-4xl text-white/20 mb-4"></i>
                            <p class="text-white/40">No blogs published yet</p>
                        </div>
                    <?php else: ?>
                        <?php foreach ($blogs as $blog): ?>
                            <div class="card p-6 rounded-[2rem] flex items-center justify-between">
                                <div class="flex items-center gap-6">
                                    <?php if (!empty($blog['image'])): ?>
                                        <img src="<?php echo $blog['image']; ?>" class="w-16 h-16 rounded-xl object-cover border border-white/10" alt="Blog image">
                                    <?php else: ?>
                                        <div class="w-16 h-16 rounded-xl bg-black/40 border border-white/10 flex items-center justify-center">
                                            <i class="fas fa-image text-white/40"></i>
                                        </div>
                                    <?php endif; ?>
                                    
                                    <div>
                                        <h4 class="text-white font-bold uppercase tracking-tight"><?php echo htmlspecialchars($blog['title']); ?></h4>
                                        <p class="text-accent text-[10px] font-black uppercase tracking-widest">
                                            <?php echo htmlspecialchars($blog['category']); ?> • <?php echo htmlspecialchars($blog['date']); ?>
                                        </p>
                                    </div>
                                </div>
                                
                                <div class="flex gap-4">
                                    <a href="../blog/<?php echo htmlspecialchars($blog['slug']); ?>" target="_blank" 
                                       class="p-3 text-white/20 hover:text-blue transition-colors">
                                        <i class="fas fa-external-link-alt"></i>
                                    </a>
                                    <a href="?delete=<?php echo $blog['id']; ?>" 
                                       onclick="return confirm('Abort Mission? This blog will be deleted forever.')"
                                       class="p-3 text-white/20 hover:text-red-500 transition-colors">
                                        <i class="fas fa-trash"></i>
                                    </a>
                                </div>
                            </div>
                        <?php endforeach; ?>
                    <?php endif; ?>
                </div>
            </div>
        </div>
    </div>
</body>
</html>

<?php $conn->close(); ?>
