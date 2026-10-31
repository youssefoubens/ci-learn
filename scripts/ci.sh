#!/usr/bin/env bash
set -euo pipefail

echo "==> node version"

node --version

echo "==> installing dependencies"
npm ci --ignore-scripts 2>/dev/null || npm install

echo "==> Running tests"
npm test

echo "==>All checks passed"

