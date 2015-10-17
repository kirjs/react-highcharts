#!/bin/sh
#
# This script builds demo and pushes it to gh-pages branch
#

# clean up
cd "$(git rev-parse --show-toplevel)"
set -e
rm -rf demo/dist || exit 0;
mkdir demo/dist;

# build
cd demo
webpack
cd dist

# deploy
git init
git remote add origin https://github.com/kirjs/react-highcharts.git
git add .
git commit -m "Deploy to GitHub Pages"
git checkout -b gh-pages
git push -uf origin gh-pages
