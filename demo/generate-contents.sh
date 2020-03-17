#!/bin/sh
#
# This script generates list of all html pages, and creates an HTML
# contents based on the titles of the documents
#

# Get all title lines from html
titles="grep "\<title\>" ./dist/*.html";

# Generate the menu
pattern=".\/dist\/\(.*\)\:.*<title>\(.*\) |.*";
replacement="<a href = \"\1\">\2<\/a>"
# Transform all titles into links, e.g.
# Input:  ./dist/highmaps.html: <title>Highmaps demo | react-highcharts</title>
# Output: <a href = "highmaps.html">Highmaps demo </a>
contents=`$titles | sed -e "s/$pattern/$replacement/" | tr "\\n" " "`

# Put it in html files
pattern="<div class = \"menu\">.*<\/div>"
replacement="<div class = \"menu\">$contents<\/div>"
# For all HTML files find the pattern, and add the contents
sed -e "s;$pattern;$replacement;" $(find ./dist -type f -name '*.html')

echo 'done generating contents';
