import { BasePage } from "./basePage";
import { FunctionsForCyperss } from "./Functions";
export class RegistrationPage extends BasePage {
    static get url() {
        return "/#/Registration";
      }
      static get EmailField() {
        return cy.get("#emailControl");
        
      }
      static get paswwordField() {
        return cy.get("#passwordControl")
      }
      static get paswordFieldReapeat() {
        return cy.get("#repeatPasswordControl")
      }
      static get clickOnSecurityQuestion() {
        return cy.get("#mat-select-2")
      }
      static get NameOfYourFavoritePet() {
      return cy.get("#mat-option-9 > span");
    }
      static get FillInAnswer() {
        return cy.get("#securityAnswerControl")
      }
      static get registerButton() {
      return cy.get("#registerButton");
      }


}