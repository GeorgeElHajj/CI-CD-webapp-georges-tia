#!/bin/bash
echo "Running HTML existence test..."
if [ -f "index.html" ]; then
  echo "✅ Test passed!"
else
  echo "❌ Test failed!"
  exit 1
fi
