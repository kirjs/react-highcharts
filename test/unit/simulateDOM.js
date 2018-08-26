/**
 * This function simulates just enough DOM to keep Highcharts happy and quiet when rendering on node.
 * It can be used for testing, and also when using reach-highcharts in isomorphic apps (but very carefully)
 *
 * It is based on JSDOM, which means 3 things:
 *
 * 1. You have to use it outside of webpack (see https://github.com/kirjs/react-highcharts/issues/12)
 * 2. Highcharts won't actually render anything as JSDOM as of now doesn't really support SVG Rendering
 * (there are multiple issues spread around the project, e.g. https://github.com/tmpvar/jsdom/issues/620)
 * 3. It will only run on IO.js, not on node.
 *
 * In order to use it just include this file before requiring Highcharts.
 */

var jsdom = require('jsdom');
const {JSDOM} = jsdom;
const {document} = (new JSDOM('<!doctype html><html><body><div id="test"></div></body></html>'),{"url":"http://127.0.0.1:8080"}).window;
var win = document.defaultView;
global.window = global;
for( var i in win ){
    if( i !== 'window' && win.hasOwnProperty(i)){
        global.window[i] = win[i];
    }
}

