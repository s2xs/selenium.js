const {Builder, By, until} = require('selenium-webdriver');
const test = require('selenium-webdriver/testing');


//chrome_driver = new webdriver.Builder().forBrowser('chrome').build();
//ie_driver = new webdriver.Builder().forBrowser('ie').build();
//firefox_driver = new webdriver.Builder().forBrowser('firefox').build();

test.describe('', function() {

    test.before(function *() {
        driver = new Builder().forBrowser('chrome').build();
    });

    test.it('Login test chrome', function*() {
        driver.get('http://www.localhost:8888/litecart/admin');
        driver.findElement(By.name('username')).sendKeys('admin');
        driver.findElement(By.name('password')).sendKeys('admin');
        driver.findElement(By.name('login')).click();
        driver.wait(until.titleIs('My Store'), 1000);
    });

    test.after(() => driver.quit());
});


test.describe('', function() {

    test.before(function *() {
        driver = new Builder().forBrowser('firefox').build();
    });

    test.it('Open firefox', function*() {
        driver.get('http://www.google.com');
        //driver.findElement(By.name('username')).sendKeys('admin');
        //driver.findElement(By.name('password')).sendKeys('admin');
        //driver.findElement(By.name('login')).click();
        //driver.wait(until.titleIs('My Store'), 1000);
    });

    test.after(() => driver.quit());
});

test.describe('', function() {

    test.before(function *() {
        driver = new Builder().forBrowser('safari').build();
    });

    test.it('Open Safari', function*() {
        driver.get('http://www.google.com');
        //driver.findElement(By.name('username')).sendKeys('admin');
        //driver.findElement(By.name('password')).sendKeys('admin');
        //driver.findElement(By.name('login')).click();
        //driver.wait(until.titleIs('My Store'), 1000);
    });

    test.after(() => driver.quit());
});