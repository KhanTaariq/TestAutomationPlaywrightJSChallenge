import {completeCheckout} from '../testDataFixtures/invintoryManagment/checkoutCmplt.json';
import{test as base, expect as baseExpect} from '@playwright/test';

export class CheckoutCompletePage
{
    constructor(page)
    {
        this.page = page;
        this.thankyouMsg = page.locator("#checkout_complete_container > h2");
        this.shipMsg = page.locator("#checkout_complete_container > div");
        this.backHomeBtn = page.locator("#back-to-products");

    }

    async verfiyCompletedMsg()
    {
        await baseExpect(this.thankyouMsg).toBeVisible();
        await baseExpect(this.thankyouMsg).toContainText(completeCheckout.thankyou_msg);
        await baseExpect(this.shipMsg).toBeVisible();
        await baseExpect(this.shipMsg).toContainText(completeCheckout.ship_msg);
    }
    async goBackToHome()
    {
        await baseExpect(this.backHomeBtn).toBeVisible();
        await this.backHomeBtn.click();
    }
}
