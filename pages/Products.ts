// ProductsPage.ts

import { Page, Locator, expect } from "@playwright/test";
import { Given, When, Fixture } from "playwright-bdd/decorators";
import { ItemModel } from "../types/ItemModel";
import { PRODUCTS_PAGE_SELECTORS } from "../utils/utils"; 

let currentItem: ItemModel | null = null;

@Fixture("productsPage")
export class ProductsPage {
  readonly page: Page;
  readonly item: Locator;
  readonly addToCartButton: Locator;
  readonly itemName: Locator;
  readonly itemDescription: Locator;
  readonly itemPrice: Locator;

  constructor(page: Page) {
    this.page = page;
    this.item = page.locator(PRODUCTS_PAGE_SELECTORS.item);
    this.addToCartButton = page.locator(PRODUCTS_PAGE_SELECTORS.addToCartButton);
    this.itemName = page.locator(PRODUCTS_PAGE_SELECTORS.itemName);
    this.itemDescription = page.locator(PRODUCTS_PAGE_SELECTORS.itemDescription);
    this.itemPrice = page.locator(PRODUCTS_PAGE_SELECTORS.itemPrice);
  }

  @Given("I am on the E-commerce page")
  async navigateToProductPage() {
    if (!this.page.url().includes("inventory")) {
      await this.page.goto("/v1/inventory.html");
    }
  }

  @When("I add a product to the cart")
  async addItemToCart() {
    currentItem = await this.getCurrentItemDetails();
    await this.addToCartButton.first().click();
  }

  private async getCurrentItemDetails(): Promise<ItemModel> {
    const itemName = await this.itemName.first().textContent();
    const itemDescription = await this.itemDescription.first().textContent();
    const itemPrice = await this.itemPrice.first().textContent();

    if (!itemName || !itemDescription || !itemPrice) {
      throw new Error("Failed to retrieve item details.");
    }

    return { name: itemName, description: itemDescription, price: itemPrice };
  }

  static getCurrentItem(): ItemModel | null {
    return currentItem;
  }
}
