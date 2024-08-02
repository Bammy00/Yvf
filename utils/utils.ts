// utils.ts
import { Locator } from "@playwright/test";

export const USERNAME_INPUT_SELECTOR = "#user-name";
export const PASSWORD_INPUT_SELECTOR = "#password";
export const LOGIN_BUTTON_SELECTOR = "#login-button";


export const CART_PAGE_SELECTORS = {
    shoppingCart: "#shopping_cart_container",
    cartItem: ".cart_item",
    itemName: ".inventory_item_name",
    itemDescription: ".inventory_item_desc",
    itemPrice: ".inventory_item_price",
  };
  
  export const CHECKOUT_PAGE_SELECTORS = {
    checkoutButton: ".checkout_button",
    firstNameInput: "#first-name",
    lastNameInput: "#last-name",
    postalCodeInput: "#postal-code",
    continueButton: ".btn_primary[value='CONTINUE']",
    finishButton: "link=FINISH",
    checkoutConfirmation: "#checkout_complete_container",
  };

  export const PRODUCTS_PAGE_SELECTORS = {
    item: ".inventory_item",
    addToCartButton: ".btn_inventory",
    itemName: ".inventory_item_name",
    itemDescription: ".inventory_item_desc",
    itemPrice: ".inventory_item_price",
  };