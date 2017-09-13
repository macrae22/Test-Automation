//A page object required and initiated
var legoHomepage = require('../pageobjects/legoHomepage.js');

var legoHome = new legoHomepage();




//Test suite and specs (it)
describe('Lego', function () {

    beforeEach(function () {
       legoHome.gotoLego();
       browser.ignoreSynchronization = true;
 
    });

   // afterEach(function () {
    //    browser.restart();
  //  });

    afterAll(function () {
        browser.quit();
    });

    describe('Homepage', function () {

        it('Shop Search', function () {
            legoHome.clickShop();
            legoHome.searchFor('ninja');
            
            //Check we are on search results page
            var heading = 'Search Results'
            expect(heading).toEqual('Search Results');
        });

        it('Page title', function () {
            //Check the Homepage title is correct
            var homepageTitle = browser.getTitle();
            expect(homepageTitle).toEqual('LEGO.com UK - Inspire and develop the builders of tomorrow - LEGO.com');
        });

        it('Australian page title', function () {
            element(by.className('market-selector')).$('[value="en-AU"]').click();

             //Check the Australian Homepage title is correct
             var homepageTitleAU = browser.getTitle();
             expect(homepageTitleAU).toEqual('LEGO.com AU - Inspire and develop the builders of tomorrow - LEGO.com');
        });

        it('German page title', function () {
            element(by.className('market-selector')).$('[value="de-DE"]').click();

             //Check the Australian Homepage title is correct
             var homepageTitleAU = browser.getTitle();
             expect(homepageTitleAU).toEqual('LEGO.com: Die Baumeister von morgen positiv inspirieren und fördern. - LEGO.com');
        });
    

    });


});