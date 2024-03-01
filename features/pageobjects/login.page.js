const { $ } = require('@wdio/globals')
const Page = require('./page');


//Tipe Variable ada = const, var, dan let
//Merubah menjadi global variabel - yang awalnya di dalam class
const element = {
    fieldUsername: $('#user-name'),
    fieldPassword: $('#password'),
    buttonLogin:  $('#login-button'),
    errorLogin: (dynamicMessage) => $(`//h3[text()="${dynamicMessage}"]`)
}

class LoginPage extends Page {
    async login (username) {
        await element.fieldUsername.waitForDisplayed({ timeout:2500 });
        await element.fieldUsername.setValue(username);
        await element.fieldPassword.setValue(process.env.PASSWORD_SAUCEDEMO);
        await element.buttonLogin.click();
    }

    async errorLoginMessage (dynamicMessage) {
        await expect(element.errorLogin(dynamicMessage)).toBeDisplayed();
    }


    open () {
        return super.open('/'); //NOTE: Will open https://www.saucedemo.com/
    }
}

module.exports = new LoginPage();
