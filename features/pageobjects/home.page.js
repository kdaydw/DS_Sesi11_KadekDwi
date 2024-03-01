const { $, expect } = require('@wdio/globals')
const Page = require('./page');

const listProducts = $('.inventory_list')

class HomePage extends Page {
    async validdateHomePage() {
        await expect(browser).toHaveUrlContaining('/inventory.html')
        await expect(listProducts).toBeDisplayed()
    }

    async addProduct(idProduct) {
        await $(`#${idProduct}`).click()
    }

    open () {
        return super.open('/inventory.html');
    }
}

module.exports = new HomePage();
