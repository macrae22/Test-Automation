exports.config = {
  specs : ['C:/Users/MartynMacrae/Test-Automation/test_automation/tests/smoketests.js'],
  'seleniumAddress': 'http://hub-cloud.browserstack.com/wd/hub',

  'capabilities': {
    'browserstack.user': 'jasonbunting1',
    'browserstack.key': 'SxEqcP3hpczft7bFpEBp',
    'os': 'Windows',
    'os_version': '8',
    'browserName': 'Chrome',
    'browser_version': '60.0',
    'resolution': '1280x800',
    'browserstack.debug': true
  }
};