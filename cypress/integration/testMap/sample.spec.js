import BasePage from "../../pageObjects/BasePage";
import AutomationPracticeFormPage from "../../pageobjects/AutomationPracticeFormPage";


describe("Text box scenarios", () => {
  beforeEach(() => {
    AutomationPracticeFormPage.visit();
  });
  
  it("Filling in Text Boxes", () => {
    cy.fixture("informationPage").then((data) => {
      AutomationPracticeFormPage.getName.type(data.name);
      AutomationPracticeFormPage.getSurname.type(data.lastName);
      AutomationPracticeFormPage.getEmail.type(data.Email);
      AutomationPracticeFormPage.getRadio.click({force:true});
      AutomationPracticeFormPage.getPhone.type(data.phone);
      AutomationPracticeFormPage.getBirthday.click();
      AutomationPracticeFormPage.getBirthyear.select("1930");
      AutomationPracticeFormPage.getBirthmonth.select("February");
      AutomationPracticeFormPage.getBirthdate.click();
      AutomationPracticeFormPage.getSubject.click();
      AutomationPracticeFormPage.getSubject.type(data.subject);
      AutomationPracticeFormPage.getEco.click();
      AutomationPracticeFormPage.getMusic.contains("Music").click();
      cy.get('input[type=file]').selectFile('../WEB_AUT_ROBERTS_BISS/cypress/files/img21.jpg');
      AutomationPracticeFormPage.getAddress.type(data.address);
      AutomationPracticeFormPage.getState.type(data.state);
      AutomationPracticeFormPage.getNCR.click();
      AutomationPracticeFormPage.getCity.type(data.city);
      AutomationPracticeFormPage.getDelhi.click();
      AutomationPracticeFormPage.submitButton.click();
    });
  });
});