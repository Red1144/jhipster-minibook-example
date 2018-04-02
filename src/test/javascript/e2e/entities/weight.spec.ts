import { browser, element, by } from 'protractor';
import { NavBarPage } from './../page-objects/jhi-page-objects';

describe('Weight e2e test', () => {

    let navBarPage: NavBarPage;
    let weightDialogPage: WeightDialogPage;
    let weightComponentsPage: WeightComponentsPage;

    beforeAll(() => {
        browser.get('/');
        browser.waitForAngular();
        navBarPage = new NavBarPage();
        navBarPage.getSignInPage().autoSignInUsing('admin', 'admin');
        browser.waitForAngular();
    });

    it('should load Weights', () => {
        navBarPage.goToEntity('weight');
        weightComponentsPage = new WeightComponentsPage();
        expect(weightComponentsPage.getTitle())
            .toMatch(/tweentyOnePointsApp.weight.home.title/);

    });

    it('should load create Weight dialog', () => {
        weightComponentsPage.clickOnCreateButton();
        weightDialogPage = new WeightDialogPage();
        expect(weightDialogPage.getModalTitle())
            .toMatch(/tweentyOnePointsApp.weight.home.createOrEditLabel/);
        weightDialogPage.close();
    });

    it('should create and save Weights', () => {
        weightComponentsPage.clickOnCreateButton();
        weightDialogPage.setTimeInput(12310020012301);
        expect(weightDialogPage.getTimeInput()).toMatch('2001-12-31T02:30');
        weightDialogPage.setWeightInput('5');
        expect(weightDialogPage.getWeightInput()).toMatch('5');
        weightDialogPage.userSelectLastOption();
        weightDialogPage.save();
        expect(weightDialogPage.getSaveButton().isPresent()).toBeFalsy();
    });

    afterAll(() => {
        navBarPage.autoSignOut();
    });
});

export class WeightComponentsPage {
    createButton = element(by.css('.jh-create-entity'));
    title = element.all(by.css('jhi-weight div h2 span')).first();

    clickOnCreateButton() {
        return this.createButton.click();
    }

    getTitle() {
        return this.title.getAttribute('jhiTranslate');
    }
}

export class WeightDialogPage {
    modalTitle = element(by.css('h4#myWeightLabel'));
    saveButton = element(by.css('.modal-footer .btn.btn-primary'));
    closeButton = element(by.css('button.close'));
    timeInput = element(by.css('input#field_time'));
    weightInput = element(by.css('input#field_weight'));
    userSelect = element(by.css('select#field_user'));

    getModalTitle() {
        return this.modalTitle.getAttribute('jhiTranslate');
    }

    setTimeInput = function(time) {
        this.timeInput.sendKeys(time);
    };

    getTimeInput = function() {
        return this.timeInput.getAttribute('value');
    };

    setWeightInput = function(weight) {
        this.weightInput.sendKeys(weight);
    };

    getWeightInput = function() {
        return this.weightInput.getAttribute('value');
    };

    userSelectLastOption = function() {
        this.userSelect.all(by.tagName('option')).last().click();
    };

    userSelectOption = function(option) {
        this.userSelect.sendKeys(option);
    };

    getUserSelect = function() {
        return this.userSelect;
    };

    getUserSelectedOption = function() {
        return this.userSelect.element(by.css('option:checked')).getText();
    };

    save() {
        this.saveButton.click();
    }

    close() {
        this.closeButton.click();
    }

    getSaveButton() {
        return this.saveButton;
    }
}
