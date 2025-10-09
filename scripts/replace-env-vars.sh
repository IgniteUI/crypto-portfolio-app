#!/bin/bash

# Script to replace environment variables in Angular environment files
# This script is used by GitHub Actions to inject secrets during build

set -e

echo "Replacing environment variables in environment.prod.ts..."

# Check if required environment variables are set
required_vars=("FIREBASE_API_KEY" "FIREBASE_AUTH_DOMAIN" "FIREBASE_DATABASE_URL" "FIREBASE_PROJECT_ID" "FIREBASE_STORAGE_BUCKET" "FIREBASE_MESSAGING_SENDER_ID")

for var in "${required_vars[@]}"; do
    if [ -z "${!var}" ]; then
        echo "Error: Environment variable $var is not set"
        exit 1
    fi
done

# Create a temporary file with replaced values
sed "s|\${FIREBASE_API_KEY}|${FIREBASE_API_KEY}|g; \
     s|\${FIREBASE_AUTH_DOMAIN}|${FIREBASE_AUTH_DOMAIN}|g; \
     s|\${FIREBASE_DATABASE_URL}|${FIREBASE_DATABASE_URL}|g; \
     s|\${FIREBASE_PROJECT_ID}|${FIREBASE_PROJECT_ID}|g; \
     s|\${FIREBASE_STORAGE_BUCKET}|${FIREBASE_STORAGE_BUCKET}|g; \
     s|\${FIREBASE_MESSAGING_SENDER_ID}|${FIREBASE_MESSAGING_SENDER_ID}|g" \
     src/environments/environment.prod.ts > src/environments/environment.prod.ts.tmp

# Replace the original file
mv src/environments/environment.prod.ts.tmp src/environments/environment.prod.ts

echo "Environment variables successfully replaced!"
echo "Contents of environment.prod.ts:"
cat src/environments/environment.prod.ts