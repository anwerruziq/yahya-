#!/bin/bash

# Build the project
echo "Building the project..."
npm run build

# Add all changes
echo "Adding changes to git..."
git add .

# Commit changes
echo "Committing changes..."
git commit -m "Deploy latest changes"

# Push to GitHub
echo "Pushing to GitHub..."
git push yahye main

echo "Deployment completed!"
echo "Your site will be available at: https://anwerruziq.github.io/yahye/"
