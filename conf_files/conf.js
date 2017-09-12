exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['C:/Users/MartynMacrae/Test-Automation/test_automation/tests/smoketests.js'],
  
  //restartBrowserBetweenTests: true,

  capabilities: {
    'browserName': 'chrome',
    'chromeOptions': {
      args: [
        '--start-maximized'
      ]
    }
  }

}