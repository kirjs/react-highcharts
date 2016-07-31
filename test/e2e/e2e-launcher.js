function testUrl(browser, page, title){
  browser
    .url(browser.launch_url + page)
    .waitForElementVisible('body', 1000)
    .waitForElementVisible('svg', 100000)
    .assert.containsText('svg', title)
    .end()
}

module.exports = {
  'Test React Highcharts': function (browser){
    testUrl(browser, 'index.html', 'Chart title')
  },
  'Test React Highcharts More': function (browser){
    testUrl(browser, 'more.html', 'Chart title')
  },
  'Test React HighMaps': function (browser){
    testUrl(browser, 'highmaps.html', 'Europe time zones')
  },
  'Test React HighStock': function (browser){
    testUrl(browser, 'highstock.html', 'AAPL')
  }
};
