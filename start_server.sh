#!/bin/bash
# EasyFood Development Server Script

echo "Starting EasyFood Development Server..."
echo "========================================="

# Check if Python 3 is available
if command -v python3 &> /dev/null; then
    echo "Starting server using Python 3..."
    cd /workspace/src
    python3 -m http.server 8000
elif command -v python &> /dev/null; then
    echo "Starting server using Python 2 (deprecated, please upgrade)..."
    cd /workspace/src
    python -m SimpleHTTPServer 8000
else
    echo "Python is not installed. Please install Python to run the development server."
    echo "Alternatively, you can open the HTML files directly in your browser."
fi