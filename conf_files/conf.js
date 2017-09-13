exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['C:/Users/MartynMacrae/Test-Automation/tests/smoketests.js'],

  capabilities: {
    'browserName': 'chrome',
    'chromeOptions': {
      args: [
        '--start-maximized'
      ]
    }
  }

}