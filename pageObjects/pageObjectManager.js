import{test as base, expect as baseExpect} from '@playwright/test';
import { LoginPage } from './loginPage';
import { ProductPage } from './productPage';
import { CartPage } from './cartPage';
import { CheckoutInfoPage } from './checkoutInfoPage';
import { CheckoutCompletePage } from './checkoutCmplt';
import { CheckoutOverviewPage } from './checkoutOrvw';


export const test = base.extend
(
    {
        loginPage: async ({ page }, use) => 
        {
            const loginPage = new LoginPage(page);
            await use(loginPage);
        },
        productPage: async ({ page }, use) => 
        {
            const productPage = new ProductPage(page);
            await use(productPage);
        },
        cartPage: async ({ page }, use) => 
        {
            const cartPage = new CartPage(page);
            await use(cartPage);
        },
        checkoutInfoPage: async ({ page }, use) => 
        {
            const checkoutInfoPage = new CheckoutInfoPage(page);
            await use(checkoutInfoPage);
        },
        checkoutCompletePage: async ({ page }, use) => 
        {
            const checkoutCompletePage = new CheckoutCompletePage(page);
            await use(checkoutCompletePage);
        },
        checkoutOverviewPage: async ({ page }, use) => 
        {
            const checkoutOverviewPage = new CheckoutOverviewPage(page);
            await use(checkoutOverviewPage);
        }

    }
);
export const expect = baseExpect;