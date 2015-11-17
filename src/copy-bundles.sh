#!/usr/bin/env bash
cd "$(git rev-parse --show-toplevel)"
rm -rf ./bundle
cp -r ./dist/bundle/highcharts.js ./
cp -r ./dist/bundle/highstock.js ./
cp -r ./dist/bundle/highmaps.js ./
