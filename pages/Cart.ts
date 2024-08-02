// CartPage.ts

import { Page, Locator, expect } from "@playwright/test";
import { When, Then, Fixture } from "playwright-bdd/decorators";
import { ProductsPage } from "./Products";
import { CART_PAGE_SELECTORS } from "../utils/utils";

@Fixture("cartPage")
export class CartPage {
  readonly page: Page;
  readonly shoppingCart: Locator;
  readonly cartItem: Locator;
  readonly itemName: Locator;
  readonly itemDescription: Locator;
  readonly itemPrice: Locator;

  constructor(page: Page) {
    this.page = page;
    this.shoppingCart = page.locator(CART_PAGE_SELECTORS.shoppingCart);
    this.cartItem = page.locator(CART_PAGE_SELECTORS.cartItem);
    this.itemName = this.cartItem.locator(CART_PAGE_SELECTORS.itemName);
    this.itemDescription = this.cartItem.locator(CART_PAGE_SELECTORS.itemDescription);
    this.itemPrice = this.cartItem.locator(CART_PAGE_SELECTORS.itemPrice);
  }

  @When("I Navigate to the shopping cart")
  async navigateToCart() {
    await this.shoppingCart.click();
  }

  @Then("I should see the item in the cart")
  async verifyItemInCart() {
    const currentItem = ProductsPage.getCurrentItem();
    if (!currentItem) {
      throw new Error("No item added to cart from ProductsPage");
    }

    await expect(this.cartItem).toBeVisible();
    await expect(this.itemName).toHaveText(currentItem.name);
    await expect(this.itemDescription).toHaveText(currentItem.description);
    await expect(this.itemPrice).toHaveText(currentItem.price.replace(/\$/g, ""));
  }
}
