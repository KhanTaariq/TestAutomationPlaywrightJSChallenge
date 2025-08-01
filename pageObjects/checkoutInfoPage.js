import {yourInfo} from '../testDataFixtures/invintoryManagment/checkoutInfoFixtures.json';
import{test as base, expect as baseExpect} from '@playwright/test';
export class CheckoutInfoPage
{
    constructor(page)
    {
        this.page = page;
        this.firstUsernameField = page.locator("#first-name");
        this.lstUsernameFiled = page.locator("#last-name");
        this.zipField = page.locator("#postal-code");
        this.ctnBtn = page.locator("#continue");
    }

    async inputYourInfo()
    {
        await baseExpect(this.firstUsernameField).toBeVisible();
        await this.firstUsernameField.fill(yourInfo.firstName);
        const firstnamevalue = await this.firstUsernameField.inputValue();
        if (firstnamevalue !== yourInfo.firstName)
            {
                throw new Error(`Expected username "${yourInfo.firstName}", but got "${firstnamevalue}"`);
            }

        await baseExpect(this.lstUsernameFiled).toBeVisible();
        await this.lstUsernameFiled.fill(yourInfo.lastName);
        const lastnamevalue = await this.lstUsernameFiled.inputValue();
        if (lastnamevalue !== yourInfo.lastName)
            {
                throw new Error(`Expected password "${yourInfo.lastName}", but got "${lastnamevalue}"`);
            }
        await baseExpect(this.zipField).toBeVisible();
        await this.zipField.fill(yourInfo.postalCode);
        const zipvalue = await this.zipField.inputValue();
        if (zipvalue !== yourInfo.postalCode)
            {
                throw new Error(`Expected zip code "${yourInfo.postalCode}", but got "${zipvalue}"`);
            }
        await baseExpect(this.ctnBtn).toBeVisible();
        await this.ctnBtn.click();
    }
}