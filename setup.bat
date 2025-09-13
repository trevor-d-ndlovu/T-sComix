@echo off
echo Setting up Comic Reader App...
echo.

echo Installing dependencies...
call npm install

echo.
echo Creating basic app structure...
if not exist "src\screens" mkdir src\screens
if not exist "src\context" mkdir src\context
if not exist "src\types" mkdir src\types
if not exist "src\extensions" mkdir src\extensions

echo.
echo Setup complete! 
echo.
echo To run the app:
echo 1. Make sure you have Node.js installed
echo 2. Install Expo CLI: npm install -g @expo/cli
echo 3. Run: npm start
echo 4. Scan QR code with Expo Go app on your phone
echo.
pause

