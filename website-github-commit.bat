@echo off
echo ==============================================
echo   I2V Consulting - Git Commit & Push Script
echo ==============================================
echo.

:: Ask for commit message
set /p msg="Enter commit message: "

echo.
echo Adding all changes...
git add .

echo.
echo Committing with message: "%msg%"
git commit -m "%msg%"

echo.
echo Pushing to main branch...
git push origin main

echo.
echo Done! Your changes are now live on Netlify.
echo ==============================================
pause
