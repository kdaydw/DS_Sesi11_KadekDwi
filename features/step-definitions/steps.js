const { Given, When, Then } = require('@wdio/cucumber-framework');


const LoginPage = require('../pageobjects/login.page.js');
const HomePage = require('../pageobjects/home.page.js');
const CartPage = require('../pageobjects/cart.page.js');

//BDD Login
Given(/^I am on the login page$/, async () => {
    await LoginPage.open()
});

When('I am login with {string} credential', async (username) => {
    await LoginPage.login(username)
});

Then(/^I should see home page$/, async () => {
    await HomePage.validdateHomePage()
});

Then(/^I should see error "(.*)"$/, async (dynamicMessage) => {
    await LoginPage.errorLoginMessage(dynamicMessage)
});


//BDD Add Products To Cart
Given(/^I am on the home page$/, async () => {
    await HomePage.validdateHomePage()
});

When('I add {string} to the cart and I click icon cart', async (product) => {
    await HomePage.addProduct(product)
    await $('#shopping_cart_container').click()
});

Then(/^I should see cart page$/, async () => {
    await CartPage.validateCartPage()
});

Then(/^I should see the list products$/, async () => {
    await CartPage.validateExistProduct()
});