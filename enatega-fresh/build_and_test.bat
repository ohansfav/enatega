@echo off
cd C:\Projects\enatega\enatega-fresh\apps\customer-web
echo Building customer app...
call npm run build
if %ERRORLEVEL% NEQ 0 (
  echo Build failed!
  exit /b 1
)

echo.
echo Build successful. Checking dist folder...
dir dist /B
echo.

cd ..\admin-web
echo Building admin app...
call npm run build
if %ERRORLEVEL% NEQ 0 (
  echo Admin build failed!
  exit /b 1
)

echo Admin build successful. Checking dist folder...
dir dist /B

echo.
echo All builds complete!
pause
