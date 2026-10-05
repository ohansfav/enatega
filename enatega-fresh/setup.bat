@echo off
REM Enatega Fresh - Windows Quick Start Script

echo.
echo ========================================
echo   ^*^ ENATEGA FRESH - QUICK START ^*^
echo ========================================
echo.
echo This script will help you get Enatega Fresh running locally.
echo.

REM Navigate to customer web app
cd /d "C:\Projects\enatega\enatega-fresh\apps\customer-web"

echo [1/3] Installing Customer Web App dependencies...
echo.
call npm install --legacy-peer-deps
if errorlevel 1 (
    echo.
    echo ERROR: Failed to install customer web app dependencies
    echo Please try manually:
    echo cd C:\Projects\enatega\enatega-fresh\apps\customer-web
    echo npm install
    pause
    exit /b 1
)

echo.
echo [OK] Customer Web App ready!
echo.

REM Navigate to admin app
cd /d "C:\Projects\enatega\enatega-fresh\apps\admin-web"

echo [2/3] Installing Admin Dashboard dependencies...
echo.
call npm install --legacy-peer-deps
if errorlevel 1 (
    echo.
    echo ERROR: Failed to install admin dependencies
    echo Please try manually:
    echo cd C:\Projects\enatega\enatega-fresh\apps\admin-web
    echo npm install
    pause
    exit /b 1
)

echo.
echo [OK] Admin Dashboard ready!
echo.

echo ========================================
echo   SETUP COMPLETE!
echo ========================================
echo.
echo ^*^ NEXT STEPS ^^
echo.
echo Start Customer Web App:
echo   cd C:\Projects\enatega\enatega-fresh\apps\customer-web
echo   npm run dev
echo   Visit: http://localhost:3000
echo.
echo Start Admin Dashboard (in another terminal):
echo   cd C:\Projects\enatega\enatega-fresh\apps\admin-web
echo   npm run dev
echo   Visit: http://localhost:3001
echo.
echo Happy coding! ^*^^^
echo.
pause
