@echo off
echo Testing MySQL connection...
"C:\xampp\mysql\bin\mysql.exe" -u root -e "SHOW DATABASES;"
echo.
echo Creating funflight database...
"C:\xampp\mysql\bin\mysql.exe" -u root -e "CREATE DATABASE IF NOT EXISTS funflight CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;"
echo.
echo Creating blogs table...
"C:\xampp\mysql\bin\mysql.exe" -u root funflight < setup-database.sql
echo.
echo MySQL setup complete!
pause
