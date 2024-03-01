require('dotenv/config')

exports.config = {
    runner: 'local',
    specs: [
        './features/**/*.feature'
    ],
    // Patterns to exclude.
    exclude: [
        // 'path/to/excluded/files'
    ],
    
    maxInstances: 2,
    capabilities: [{
        maxInstances: 1,
        browserName: 'chrome'
    }, {
        maxInstances: 1,
        browserName: 'MicrosoftEdge'
    }],

    logLevel: 'info',
    bail: 0,
    baseUrl: 'https://www.saucedemo.com',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['devtools'],
    framework: 'cucumber',
  
    // see also: https://webdriver.io/docs/dot-reporter
    reporters: [['allure', {outputDir: 'allure-results'}]],

    // If you are using Cucumber you need to specify the location of your step definitions.
    cucumberOpts: {
        // <string[]> (file/dir) require files before executing features
        require: ['./features/step-definitions/steps.js'],
        // <boolean> show full backtrace for errors
        backtrace: false,
        // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
        requireModule: [],
        // <boolean> invoke formatters without executing steps
        dryRun: false,
        // <boolean> abort the run on first failure
        failFast: false,
        // <string[]> Only execute the scenarios with name matching the expression (repeatable).
        name: [],
        // <boolean> hide step definition snippets for pending steps
        snippets: true,
        // <boolean> hide source uris
        source: true,
        // <boolean> fail if there are any undefined or pending steps
        strict: false,
        // <string> (expression) only execute the features or scenarios with tags matching the expression
        tagExpression: '',
        // <number> timeout for step definitions
        timeout: 60000,
        // <boolean> Enable this config to treat undefined definitions as warnings.
        ignoreUndefinedDefinitions: false
    },


}
