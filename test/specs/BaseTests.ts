const assert = require('assert');
describe('webdriver.io page for testing', () => {
    it('should have the right title', () => {
        browser.url('https://webdriver.io');
        const title = browser.getTitle();
        console.log(title)
        assert.equal(title,'WebdriverIO · Next-gen WebDriver test framework for Node.js');
    });
});


