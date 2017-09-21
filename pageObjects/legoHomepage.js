var legoHomepage = function () {

    var EC = protractor.ExpectedConditions;

    //Constansts
    const url = 'https://www.lego.com/en-gb';
    const pageTitle = 'LEGO.com UK - Inspire and develop the builders of tomorrow - LEGO.com';


    //Attributes - WebElements of the page
    this.shopOption = element(by.className('gn-icon gn-icon-shop'));
    this.searchField = element(by.name('query'));
    this.privacyPolicy = element(by.id('GFSpplink'));
    this.cookiePolicy = element(by.id('GFScilink'));
    this.legalNotice = element(by.css('a[href*="https://www.lego.com/en-gb/legal-notices"]'));
    this.termsOfUse = element(by.css('a[href*="https://www.lego.com/en-gb/legal/legal-notice"]'));
    this.buildinginstructions = element(by.css('a[href*="https://www.lego.com/en-gb/service/buildinginstructions"]'));


    //Methods - Actions performed at the page using the webElement
    this.gotoLego = function () {
        browser.get(url);
        browser.waitForAngular();
    }

    this.clickShop = function () {
        browser.wait(EC.elementToBeClickable(this.shopOption), 10000);
        this.shopOption.click();
        browser.sleep('3000');
    }

    this.searchFor = function (searchText) {
        this.searchField.sendKeys(searchText);
        browser.actions().sendKeys(protractor.Key.ENTER).perform();
        browser.sleep('3000');
    }

    this.clickPrivacyPolicy = function () {
        browser.wait(EC.elementToBeClickable(this.privacyPolicy), 10000);
        this.privacyPolicy.click();
    }

    this.clickCookiePolicy = function () {
        browser.wait(EC.elementToBeClickable(this.cookiePolicy), 10000);
        this.cookiePolicy.click();
    }

    this.clickLegalNotice = function () {
        browser.wait(EC.elementToBeClickable(this.legalNotice), 10000);
        this.legalNotice.click();
    }

    this.clickTermsOfUse = function () {
        browser.wait(EC.elementToBeClickable(this.termsOfUse), 10000);
        this.termsOfUse.click();
    }

    this.clickBuildingInstructions = function () {
        browser.wait(EC.elementToBeClickable(this.buildinginstructions), 10000);
        this.buildinginstructions.click();
    }

    

}

module.exports = legoHomepage;