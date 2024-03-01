const { $, expect } = require('@wdio/globals')
const Page = require('./page');

const listProductss = $('.cart_item')

class CartPage extends Page {
    async validateCartPage() {
        await expect(browser).toHaveUrlContaining('/cart.html')
    }

    async validateExistProduct(){
      await expect(listProductss).toBeDisplayed()
    }

    open () {
        return super.open('/cart.html');
    }
}

module.exports = new CartPage();