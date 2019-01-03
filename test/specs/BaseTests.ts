const assert = require('assert');
describe('webdriver.io page', () => {
    it('should have the right title', () => {
        browser.url('https://webdriver.io');
        const title = browser.getTitle();
        console.log(title)
        assert.equal(title,'WebdriverIO · Next-gen WebDriver test framework for Node.js');
    });
});

