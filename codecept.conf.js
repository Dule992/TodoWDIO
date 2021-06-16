exports.config = {
  output: './output',
  helpers: {
    WebDriver: {
      url: 'https://todomvc.com/examples/angular2/',
      browser: 'chrome'
    }
  },
  include: {
    I: './steps_file.js'
  },
  mocha: {},
  bootstrap: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/steps.js']
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    wdio: {
      enabled: true,
      services: ['selenium-standalone']
    },
    stepByStepReport: {
      enabled: true,
      screenshotsForAllureReport: true
    },
    allure: {
      enabled: true
    }
  },
  tests: './*_test.js',
  name: 'TodoWDIO'
}