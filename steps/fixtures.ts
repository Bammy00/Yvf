import { test as base } from "playwright-bdd";
import { LoginPage } from "../pages/Login";
import { ProductsPage } from "../pages/Products";
import { CartPage } from "../pages/Cart";
import { CheckoutPage } from "../pages/Checkout";

export const test = base.extend<{
  loginPage: LoginPage;
  productsPage: ProductsPage;
  cartPage: CartPage;
  checkoutPage: CheckoutPage;
}>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  productsPage: async ({ page }, use) => {
    await use(new ProductsPage(page));
  },
  cartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  },
  checkoutPage: async ({ page }, use) => {
    await use(new CheckoutPage(page));
  },
});
