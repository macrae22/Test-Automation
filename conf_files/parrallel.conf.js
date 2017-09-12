exports.config = {
  specs: ['C:/Users/MartynMacrae/Test-Automation/test_automation/tests/smoketests.js'],
  'seleniumAddress': 'http://hub-cloud.browserstack.com/wd/hub',
  
    'commonCapabilities': {
      'browserstack.user': 'jasonbunting1',
      'browserstack.key': 'SxEqcP3hpczft7bFpEBp'
    },
  
    'multiCapabilities': [{
      'browserName': 'Chrome'
    },{
      'browserName': 'Safari'
    },{
      'browserName': 'Firefox'
    },{
      'browserName': 'IE'
    }]
  };
  
  // Code to support common capabilities
  exports.config.multiCapabilities.forEach(function(caps){
    for(var i in exports.config.commonCapabilities) caps[i] = caps[i] || exports.config.commonCapabilities[i];
  });
