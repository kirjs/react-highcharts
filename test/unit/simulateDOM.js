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
global.dom = new JSDOM('<!doctype html><html><body></body></html>');
global.window = dom.window;
global.document = dom.window.document;
global.navigator = global.window.navigator;

