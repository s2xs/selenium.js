/**
driver = new webdriver.Builder()
    .withCapabilities({'firefox_binary': 'c:\\Program Files (x86)\\Nightly\\firefox.exe'})
    .forBrowser('firefox')
    .build();
**/
var webdriver = require('selenium-webdriver');
const test = require('selenium-webdriver/testing');

test.describe('', function() {

    test.before(function *() {
        driver = new webdriver.Builder()
            .withCapabilities({'firefox_binary': '/Applications/FirefoxNightly.app/Contents/MacOS/firefox'})
            .forBrowser('firefox')
            .build();
    });

    test.it('Login test chrome', function*() {
        driver.get('http://www.google.com');
    });

    test.after(() => driver.quit());
});
