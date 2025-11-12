@echo off
echo ========================================
echo  CityCare Hospital Backend Server
echo ========================================
echo.
echo Starting server...
echo.

cd /d "%~dp0backend"
python app.py

pause
