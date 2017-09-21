//A page object required and initiated
var legoHomepage = require('../pageobjects/legoHomepage.js');

var legoHome = new legoHomepage();




//Test suite and specs (it)
describe('Lego', function () {


    beforeEach(function () {
        legoHome.gotoLego();
        browser.ignoreSynchronization = true;

    });

    afterAll(function () {
        browser.quit();
    });

    describe('Lego Homepage', function () {

        it('Shop Search', function () {
            legoHome.clickShop();
            legoHome.searchFor('ninja');

            //Check we are on search results page
            var heading = element(by.className('banner__heading'));
            expect(heading.getText()).toEqual('Search Results');
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

        it('Privacy Policy test', function () {
            legoHome.clickPrivacyPolicy();

            browser.switchTo().frame(1);

            //Check 'Privacy Policy' header is correct
            var privacyPolicyHeader = element(by.tagName('h3'));
            expect(privacyPolicyHeader.getText()).toEqual('Your privacy');
        });

        it('Cookie Policy test', function () {
            legoHome.clickCookiePolicy();

            browser.switchTo().frame(1);

            //Check 'Cookie Policy' header is correct
            var cookieHeader = element(by.tagName('h2'));
            expect(cookieHeader.getText()).toContain('Cookie Policy');
        });

        it('Legal Notice test', function () {
            legoHome.clickLegalNotice();
            
            //Check 'Leagal Notice' header is correct
            var legalNoticeHeader = element(by.tagName('h1'));
            expect(legalNoticeHeader.getText()).toContain('Legal Notice');

        });

        it('Terms of Use test', function () {
            legoHome.clickTermsOfUse();
            
            //Check 'Terms of Use' header is correct
            var termsOfUseHeader = element(by.tagName('h3'));
            expect(termsOfUseHeader.getText()).toContain('Legal Notice');

        });

        it('Building Instructions test', function () {
            legoHome.clickBuildingInstructions();
            
            //Check 'Building Instructions' header is correct
            var buildingInstructionsHeader = element(by.css('h3.hgroup-txt span'));
            expect(buildingInstructionsHeader.getText()).toContain('BUILDING INSTRUCTIONS');

        });

        it('Products page test', function () {
            legoHome.clickProducts();

            //Check we are on the 'Products' page
            var productsPageHeader = element(by.css('li.active [itemprop="name"]'));
            expect(productsPageHeader.getText()).toContain('Products');

        });

        it('Games page test', function () {
            legoHome.clickGames();

            //Check we are on the 'Games' page
            var gamesPageHeader = element(by.css('li.active [itemprop="name"]'));
            expect(gamesPageHeader.getText()).toContain('Games');

        });

        it('Create & Share page test', function () {
            legoHome.clickCreateAndShare();

            //Check we are on the 'Create & Share' page
            var gamesPageHeader = element(by.css('h3.cta-headline'));
            expect(gamesPageHeader.getText()).toContain('WELCOME TO LEGO® LIFE');

        });

        it('Video page test', function () {
            legoHome.clickVideos();

            //Check we are on the 'Video' page
            var videoPageHeader = element(by.css('li.active [itemprop="name"]'));
            expect(videoPageHeader.getText()).toContain('Videos');

        });

    });


});