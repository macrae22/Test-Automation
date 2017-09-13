var browserstack = require('browserstack-local');

exports.config = {
  specs: ['C:/Users/MartynMacrae/Test-Automation/tests/smoketests.js'],
  seleniumAddress: 'http://hub-cloud.browserstack.com/wd/hub',

  'capabilities': {
    'browserstack.user': 'jasonbunting1',
    'browserstack.key': 'SxEqcP3hpczft7bFpEBp',
    'browserstack.local': true,
    'os': 'Windows',
    'os_version': '8',
    'browserName': 'Chrome',
    'browser_version': '60.0',
    'resolution': '1280x800',
    'browserstack.debug': true
  },

  onPrepare : function() {
    browser.manage().window().maximize();
  },

  // Code to start browserstack local before start of test
  beforeLaunch: function(){
    console.log("Connecting local");
    return new Promise(function(resolve, reject){
      exports.bs_local = new browserstack.Local();
      exports.bs_local.start({'key': exports.config.capabilities['browserstack.key'] }, function(error) {
        if (error) return reject(error);
        console.log('Connected. Now testing...');

        resolve();
      });
    });
  },

  // Code to stop browserstack local after end of test
  afterLaunch: function(){
    return new Promise(function(resolve, reject){
      exports.bs_local.stop(resolve);
    });
  }
};