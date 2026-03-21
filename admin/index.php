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

// Get blog count
$result = $conn->query("SELECT COUNT(*) as count FROM blogs");
$blog_count = $result->fetch_assoc()['count'];

// Get leads count (placeholder for now)
$leads_count = 0; // You can implement this later

$conn->close();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fun Flight Admin</title>
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
                <a href="index.php" class="w-full flex items-center gap-4 px-5 py-4 rounded-xl transition-all text-white border border-accent/50">
                    <i class="fas fa-tachometer-alt text-accent"></i>
                    <span class="font-bold text-sm">Dashboard</span>
                </a>
                <a href="blogs.php" class="w-full flex items-center gap-4 px-5 py-4 rounded-xl transition-all text-white/50 hover:text-white">
                    <i class="fas fa-file-alt"></i>
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
                            <h1 class="text-4xl font-bold text-accent tracking-tight uppercase">Flight Deck</h1>
                        </div>
                        <p class="text-white/40 text-sm ml-4 uppercase tracking-widest">System Control / Dashboard</p>
                    </div>
                    <div class="w-10 h-10 bg-[#001a35] rounded-full border border-accent/30 flex items-center justify-center text-accent font-bold">
                        A
                    </div>
                </div>
            </header>
            
            <div class="px-12 pb-20">
                <!-- Stats Cards -->
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div class="card p-8 rounded-[2.5rem] bg-gradient-to-br from-blue-500/20 to-transparent">
                        <div class="flex justify-between items-start mb-6">
                            <div class="p-4 bg-black/40 rounded-2xl text-accent">
                                <i class="fas fa-file-alt"></i>
                            </div>
                            <span class="text-[10px] font-black text-blue uppercase tracking-[0.2em]">Operational</span>
                        </div>
                        <h3 class="text-white/40 text-xs uppercase font-bold tracking-widest mb-2">Active Blogs</h3>
                        <p class="text-4xl font-black text-white tracking-tighter"><?php echo $blog_count; ?></p>
                    </div>
                    
                    <div class="card p-8 rounded-[2.5rem] bg-gradient-to-br from-amber-500/20 to-transparent">
                        <div class="flex justify-between items-start mb-6">
                            <div class="p-4 bg-black/40 rounded-2xl text-accent">
                                <i class="fas fa-users"></i>
                            </div>
                            <span class="text-[10px] font-black text-blue uppercase tracking-[0.2em]">Operational</span>
                        </div>
                        <h3 class="text-white/40 text-xs uppercase font-bold tracking-widest mb-2">Total Leads</h3>
                        <p class="text-4xl font-black text-white tracking-tighter"><?php echo $leads_count; ?></p>
                    </div>
                    
                    <div class="card p-8 rounded-[2.5rem] bg-gradient-to-br from-emerald-500/20 to-transparent">
                        <div class="flex justify-between items-start mb-6">
                            <div class="p-4 bg-black/40 rounded-2xl text-accent">
                                <i class="fas fa-images"></i>
                            </div>
                            <span class="text-[10px] font-black text-blue uppercase tracking-[0.2em]">Operational</span>
                        </div>
                        <h3 class="text-white/40 text-xs uppercase font-bold tracking-widest mb-2">Gallery Assets</h3>
                        <p class="text-4xl font-black text-white tracking-tighter">0</p>
                    </div>
                </div>
                
                <!-- Recent Activity -->
                <div class="card p-8 rounded-[2.5rem]">
                    <h3 class="text-lg font-bold text-white mb-6">Recent Activity</h3>
                    <div class="text-white/40 text-center py-8">
                        <i class="fas fa-chart-line text-4xl mb-4"></i>
                        <p>System operational - All services running normally</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>

<?php $conn->close(); ?>
