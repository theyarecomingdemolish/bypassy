@echo off
title Bypassy Server
echo Cleaning up old processes...
taskkill /F /IM node.exe >nul 2>&1
echo Starting Bypassy...
node server.js
pause
