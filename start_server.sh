#!/bin/bash

echo "========================================"
echo " CityCare Hospital Backend Server"
echo "========================================"
echo ""
echo "Starting server..."
echo ""

cd "$(dirname "$0")/backend"
python app.py
