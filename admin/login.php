<?php
session_start();

// Handle login
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $username = $_POST['username'] ?? '';
    $password = $_POST['password'] ?? '';
    
    // Simple authentication (you should use proper password hashing in production)
    if ($username === 'admin' && $password === 'admin123') {
        $_SESSION['admin_logged_in'] = true;
        $_SESSION['admin_username'] = $username;
        header('Location: index.php');
        exit;
    } else {
        $error = "Invalid credentials";
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fun Flight Admin Login</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <style>
        body {
            background: linear-gradient(135deg, #0a1525 0%, #1a2c42 100%);
            font-family: 'Inter', sans-serif;
        }
        .login-card {
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
</head>
<body class="min-h-screen flex items-center justify-center">
    <div class="login-card p-12 rounded-[2.5rem] w-full max-w-md">
        <div class="text-center mb-8">
            <div class="w-16 h-16 bg-[#001a35] rounded-full border-2 border-accent/30 flex items-center justify-center mx-auto mb-4">
                <i class="fas fa-plane text-accent text-2xl"></i>
            </div>
            <h1 class="text-2xl font-black text-accent tracking-tight uppercase mb-2">FUN FLIGHT</h1>
            <p class="text-white/40 text-sm uppercase tracking-widest">Admin Terminal</p>
        </div>
        
        <?php if (isset($error)): ?>
            <div class="bg-red-500/20 border border-red-500/30 text-red-400 px-4 py-3 rounded-lg mb-6">
                <?php echo $error; ?>
            </div>
        <?php endif; ?>
        
        <form method="POST" class="space-y-6">
            <div>
                <label class="block text-white/40 text-xs uppercase font-bold tracking-widest mb-2">Username</label>
                <div class="relative">
                    <i class="fas fa-user absolute left-4 top-1/2 transform -translate-y-1/2 text-white/40"></i>
                    <input type="text" name="username" required
                           class="w-full bg-black/40 border border-white/10 pl-12 pr-4 py-4 rounded-xl text-white outline-none focus:border-accent transition-colors"
                           placeholder="Enter username">
                </div>
            </div>
            
            <div>
                <label class="block text-white/40 text-xs uppercase font-bold tracking-widest mb-2">Password</label>
                <div class="relative">
                    <i class="fas fa-lock absolute left-4 top-1/2 transform -translate-y-1/2 text-white/40"></i>
                    <input type="password" name="password" required
                           class="w-full bg-black/40 border border-white/10 pl-12 pr-4 py-4 rounded-xl text-white outline-none focus:border-accent transition-colors"
                           placeholder="Enter password">
                </div>
            </div>
            
            <button type="submit" class="w-full btn-primary font-black py-4 rounded-xl uppercase tracking-widest text-sm hover:scale-105 transition-all">
                Access Terminal
            </button>
        </form>
        
        <div class="text-center mt-8">
            <p class="text-white/20 text-xs">
                <i class="fas fa-lock mr-2"></i>
                Secure Admin Access
            </p>
        </div>
    </div>
</body>
</html>
