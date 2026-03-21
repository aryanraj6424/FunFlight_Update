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

// Handle status toggle
if (isset($_GET['toggle']) && is_numeric($_GET['toggle'])) {
    $lead_id = $_GET['toggle'];
    
    // Get current status
    $result = $conn->query("SELECT status FROM contacts WHERE id = $lead_id");
    if ($row = $result->fetch_assoc()) {
        $new_status = $row['status'] === 'New' ? 'Responded' : 'New';
        
        $sql = "UPDATE contacts SET status = ? WHERE id = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("si", $new_status, $lead_id);
        $stmt->execute();
        $stmt->close();
    }
    
    header('Location: contacts.php');
    exit;
}

// Handle deletion
if (isset($_GET['delete']) && is_numeric($_GET['delete'])) {
    $lead_id = $_GET['delete'];
    $sql = "DELETE FROM contacts WHERE id = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $lead_id);
    $stmt->execute();
    $stmt->close();
    
    header('Location: contacts.php');
    exit;
}

// Get all contact leads from database
$leads = [];
$result = $conn->query("SELECT * FROM contacts ORDER BY created_at DESC");
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $leads[] = $row;
    }
}
$conn->close();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Leads - Fun Flight Admin</title>
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
    </style>
    <script>
        // Auto-refresh every 10 seconds to show new submissions
        setInterval(function() {
            location.reload();
        }, 10000);
        
        // Manual refresh button
        function refreshContacts() {
            location.reload();
        }
    </script>
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
                <a href="gallery.php" class="w-full flex items-center gap-4 px-5 py-4 rounded-xl transition-all text-white/50 hover:text-white">
                    <i class="fas fa-images"></i>
                    <span class="font-bold text-sm">Update Gallery</span>
                </a>
                <a href="contacts.php" class="w-full flex items-center gap-4 px-5 py-4 rounded-xl transition-all text-white border border-accent/50">
                    <i class="fas fa-users text-accent"></i>
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
                            <h1 class="text-4xl font-bold text-accent tracking-tight uppercase">Contact Leads</h1>
                        </div>
                        <p class="text-white/40 text-sm ml-4 uppercase tracking-widest">System Control / Contacts</p>
                    </div>
                    <div class="flex items-center gap-4">
                        <button onclick="refreshContacts()" class="bg-accent text-black px-4 py-2 rounded-lg hover:bg-[#d4b068] transition-colors flex items-center gap-2">
                            <i class="fas fa-sync-alt"></i> Refresh
                        </button>
                        <div class="w-10 h-10 bg-[#001a35] rounded-full border border-accent/30 flex items-center justify-center text-accent font-bold">
                            A
                        </div>
                    </div>
                </div>
            </header>
            
            <div class="px-12 pb-20">
                <!-- Stats Cards -->
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div class="card p-6 rounded-xl">
                        <div class="flex justify-between items-start mb-4">
                            <div class="p-3 bg-black/40 rounded-lg text-accent">
                                <i class="fas fa-users"></i>
                            </div>
                            <span class="text-xs text-blue font-bold">Total</span>
                        </div>
                        <h3 class="text-white/40 text-xs uppercase mb-2">All Leads</h3>
                        <p class="text-3xl font-bold text-white"><?php echo count($leads); ?></p>
                    </div>
                    
                    <div class="card p-6 rounded-xl">
                        <div class="flex justify-between items-start mb-4">
                            <div class="p-3 bg-black/40 rounded-lg text-accent">
                                <i class="fas fa-clock"></i>
                            </div>
                            <span class="text-xs text-blue font-bold">New</span>
                        </div>
                        <h3 class="text-white/40 text-xs uppercase mb-2">Pending</h3>
                        <p class="text-3xl font-bold text-white">
                            <?php echo count(array_filter($leads, fn($lead) => $lead['status'] === 'New')); ?>
                        </p>
                    </div>
                    
                    <div class="card p-6 rounded-xl">
                        <div class="flex justify-between items-start mb-4">
                            <div class="p-3 bg-black/40 rounded-lg text-accent">
                                <i class="fas fa-check"></i>
                            </div>
                            <span class="text-xs text-blue font-bold">Done</span>
                        </div>
                        <h3 class="text-white/40 text-xs uppercase mb-2">Responded</h3>
                        <p class="text-3xl font-bold text-white">
                            <?php echo count(array_filter($leads, fn($lead) => $lead['status'] === 'Responded')); ?>
                        </p>
                    </div>
                </div>
                
                <!-- Leads List -->
                <div class="space-y-4">
                    <h3 class="text-white/40 font-bold uppercase tracking-widest text-xs">Recent Inquiries</h3>
                    
                    <?php if (empty($leads)): ?>
                        <div class="card p-12 rounded-xl text-center">
                            <i class="fas fa-inbox text-4xl text-white/20 mb-4"></i>
                            <p class="text-white/40">No contact leads yet</p>
                        </div>
                    <?php else: ?>
                        <?php foreach ($leads as $lead): ?>
                            <div class="card p-8 rounded-xl flex items-center justify-between hover:border-white/20 transition-all">
                                <div class="flex items-center gap-8">
                                    <div class="w-14 h-14 bg-[#0a1525] rounded-full border border-accent/40 flex items-center justify-center text-accent">
                                        <i class="fas fa-user"></i>
                                    </div>
                                    <div>
                                        <h4 class="font-bold text-white text-lg tracking-tight uppercase"><?php echo htmlspecialchars($lead['name']); ?></h4>
                                        <p class="text-xs text-accent mt-1 font-bold"><?php echo htmlspecialchars($lead['email']); ?></p>
                                        <p class="text-xs text-white/40 mt-1 uppercase italic">
                                            <?php echo htmlspecialchars(substr($lead['message'], 0, 50)) . '...'; ?>
                                        </p>
                                    </div>
                                </div>
                                
                                <div class="flex items-center gap-6">
                                    <div class="text-[10px] font-bold text-white/30 uppercase flex items-center gap-2">
                                        <i class="fas fa-clock"></i> 
                                        <?php echo htmlspecialchars($lead['date']); ?>
                                    </div>
                                    
                                    <button 
                                        onclick="window.location.href='?toggle=<?php echo $lead['id']; ?>'"
                                        class="px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest border transition-all <?php echo $lead['status'] === 'New' ? 'bg-accent text-black border-transparent' : 'bg-transparent text-blue border-blue/40'; ?>">
                                        <?php echo $lead['status'] === 'New' ? 'Mark Responded' : 'Processed'; ?>
                                    </button>
                                    
                                    <button 
                                        onclick="if(confirm('Delete this lead?')) window.location.href='?delete=<?php echo $lead['id']; ?>'"
                                        class="text-white/10 hover:text-red-500 transition-colors">
                                        <i class="fas fa-trash text-2xl"></i>
                                    </button>
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
