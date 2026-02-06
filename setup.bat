@echo off
echo ========================================
echo Real Creators Website - Setup Script
echo ========================================
echo.

echo [1/4] Creating image directories...
if not exist "public\images\hero" mkdir "public\images\hero"
if not exist "public\images\products" mkdir "public\images\products"
if not exist "public\images\team" mkdir "public\images\team"
if not exist "public\images\highlights" mkdir "public\images\highlights"
if not exist "public\images\blog" mkdir "public\images\blog"
if not exist "public\images\about" mkdir "public\images\about"
echo ✓ Image directories created
echo.

echo [2/4] Creating .env.local file...
if not exist ".env.local" (
    copy ".env.example" ".env.local"
    echo ✓ .env.local created from template
    echo ! Remember to add your EmailJS credentials
) else (
    echo ! .env.local already exists, skipping
)
echo.

echo [3/4] Installing dependencies...
echo This may take a few minutes...
call npm install
if %errorlevel% neq 0 (
    echo ✗ Installation failed
    echo Please run 'npm install' manually
    pause
    exit /b 1
)
echo ✓ Dependencies installed
echo.

echo [4/4] Running initial build test...
call npm run build
if %errorlevel% neq 0 (
    echo ✗ Build failed
    echo Please check for errors above
    pause
    exit /b 1
)
echo ✓ Build successful
echo.

echo ========================================
echo Setup Complete! 🎉
echo ========================================
echo.
echo Next steps:
echo 1. Add your images to public/images/ directories
echo 2. Update .env.local with your EmailJS credentials
echo 3. Update contact information in the code
echo 4. Run 'npm run dev' to start development server
echo.
echo For detailed instructions, see:
echo - QUICKSTART.md (5-minute guide)
echo - README.md (full documentation)
echo.
echo Happy coding! 🚀
echo.
pause
