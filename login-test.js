
const {Builder, By, until} = require('selenium-webdriver');
const test = require('selenium-webdriver/testing');

test.describe('', function() {

    test.before(function *() {
        driver = new Builder().forBrowser('chrome').build();
    });

    test.it('Login test', function*() {
        driver.get('http://www.localhost:8888/litecart/admin');
        driver.findElement(By.name('username')).sendKeys('admin');
        driver.findElement(By.name('password')).sendKeys('admin');
        driver.findElement(By.name('login')).click();
        driver.wait(until.titleIs('My Store'), 1000);
    });

    test.after(() => driver.quit());
});
