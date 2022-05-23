import BasePage from "./BasePage";

class AutomationPracticeFormPage extends BasePage {
  static get url() {
    return "/automation-practice-form";
  }

  
  static get getName() {
    return cy.get("#firstName");
  }
  static get getSurname() {
    return cy.get("#lastName");
  }
  static get getEmail() {
    return cy.get("#userEmail");
  }
  static get getRadio() {
    return cy.get("#gender-radio-1");
  }
  static get getPhone() {
    return cy.get("#userNumber");
  }

  static get getBirthday() {
    return cy.get("#dateOfBirthInput");
  }

  static get getBirthyear() {
    return cy.get(".react-datepicker__year-select");
  }

  static get getBirthmonth() {
    return cy.get(".react-datepicker__month-select");
  }

  static get getSubject() {
    return cy.get("#subjectsContainer");
  }

  static get getBirthdate() {
    return cy.get(":nth-child(5) > .react-datepicker__day--028");
  }

  static get getEco() {
    return cy.get("#react-select-2-option-0");
  }

  static get getMusic() {
    return cy.get("#hobbiesWrapper");
  }
  
  static get getAddress() {
    return cy.get("#currentAddress");
  }
  static get getState() {
    return cy.get("#state");
  }

  static get getNCR() {
    return cy.get("#react-select-3-option-0");
  }

  static get getCity() {
    return cy.get("#city");
  }

  static get getDelhi() {
      return cy.get("#react-select-4-option-0");
  }

  static get submitButton() {
      return cy.get("#submit");
  }
  
}
export default AutomationPracticeFormPage;