import { Page, Locator } from "@playwright/test";
import { Given, Fixture } from "playwright-bdd/decorators";
import {USERNAME_INPUT_SELECTOR,PASSWORD_INPUT_SELECTOR,LOGIN_BUTTON_SELECTOR,} from "../utils/utils";

type UserType = "standard";

interface Credentials {
  username: string;
  password: string;
}

@Fixture("loginPage")
export class LoginPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator(USERNAME_INPUT_SELECTOR);
    this.passwordInput = page.locator(PASSWORD_INPUT_SELECTOR);
    this.loginButton = page.locator(LOGIN_BUTTON_SELECTOR);
  }

  @Given("I am Signed in as a {string} user")
  async loginAs(user: UserType) {
    await this.page.goto("/v1");
    const userCredentials = this.getUserCredentials(user);
    await this.usernameInput.fill(userCredentials.username);
    await this.passwordInput.fill(userCredentials.password);
    await this.loginButton.click();
  }

  private getUserCredentials(user: UserType): Credentials {
    const credentials: Record<UserType, Credentials> = {
      "standard": { username: "standard_user", password: "secret_sauce" },
    };

    return credentials[user];
  }
}
