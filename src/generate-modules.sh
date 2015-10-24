#!/bin/sh
#
# This scripts collects all highcharts modules, and for each module generates a
# file requiring this module.
#
# e.g. modules/more.js
#
# will contain the folling:
# module.exports = require('highcharts-release/highcharts-more.js');
#

dir="../modules/"
node_modules_dir="../node_modules/"

# Clean up first
echo "clean up."
rm -rf $dir
mkdir $dir
echo "folder created."


generate () {
  # Iterate ove a list of files
  for path in $@ ; do

    # only get filename e.g. file.js
    file="${path##*/}"
    # Get rid of .src e.g file.src.js -> file.js
    file=${file/.src/}
    # Get rid of 'highcharts-' prefix e.g highcharts-more.js -> more.js
    file=${file/highcharts-/}

    # We only need local path to the files,
    # e.g. ../node_modules/highcharts-release/highcharts-3d.js -> highcharts-release/highcharts-3d.js
    path=${path/$node_modules_dir/}

    if [ ! -e "$dir$file" ]; then
      echo "Added $file referencing $path";
      echo "module.exports = require('$path');" > "$dir$file";
    fi
  done
}

generate "${node_modules_dir}*-release/modules/*"
generate "${node_modules_dir}highcharts-release/highcharts-*.js"
