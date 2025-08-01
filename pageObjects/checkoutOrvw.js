import {overview} from '../testDataFixtures/invintoryManagment/checkoutOrvw.json';
import{test as base, expect as baseExpect} from '@playwright/test';

export class CheckoutOverviewPage
{
    constructor(page)
    {
        this.page = page;
        this.cancelBtn = page.locator("#cancel");
        this.finishBtn = page.locator("#finish");
        this.chkoutSummaryContainer = page.locator("#checkout_summary_container");
        this.overViewTitle = page.locator("[data-test='title']");

    }
    async verifyOverviewPage()
    {
        await baseExpect(this.overViewTitle).toBeVisible();
        await baseExpect(this.overViewTitle).toContainText(overview.title.overview_title);
        await baseExpect(this.chkoutSummaryContainer).toBeVisible();
    }

    async finishPurchase()
    {
        await baseExpect(this.finishBtn).toBeVisible();
        await this.finishBtn.click();
    }

    async getSumaryDescriptionsAndValidate()
    {
        // Find all matching elements of this locator
        const items = await this.page.locator("#checkout_summary_container").all();
        // Storing the matching elements text content in an array
        const descriptions = [];
        // Looping through the array to get the descriptions of test found and put them in a descriptions array
        for (const item of items)
            {
                descriptions.push(await item.textContent());
            }
        console.log('Descriptions:', descriptions);
        return descriptions;
    }

    async helperGetItemBackpack(descriptions)
    {
        console.log('Expected:', overview.products.item_Backpack);
        //and validating the item description, title and price
        baseExpect(descriptions.some(desc => desc.includes(overview.products.item_Backpack.item_title_name))).toBeTruthy();
        baseExpect(descriptions.some(desc => desc.includes(overview.products.item_Backpack.item_description))).toBeTruthy();
        baseExpect(descriptions.some(desc => desc.includes(overview.products.item_Backpack.item_price))).toBeTruthy();
        //baseExpect(descriptions.some(desc => desc.includes(overview.products.item_Backpack.addCart_btn))).toBeTruthy();
    }

    async getItemBackpack()
    {
        const descriptions = await this.getSumaryDescriptionsAndValidate();
        await this.helperGetItemBackpack(descriptions); // Pass descriptions to the helper
        //baseExpect(descriptions.some(desc => desc.includes(overview.products.item_Backpack.addCart_btn))).toBeTruthy();
    }

    async getItemTshirt()
    {
        const descriptions = await this.getSumaryDescriptionsAndValidate();
        console.log('Expected:', overview.products.item_Tshirt);
        baseExpect(descriptions.some(desc => desc.includes(overview.products.item_Tshirt.item_title_name))).toBeTruthy();
        baseExpect(descriptions.some(desc => desc.includes(overview.products.item_Tshirt.item_description))).toBeTruthy();
        baseExpect(descriptions.some(desc => desc.includes(overview.products.item_Tshirt.item_price))).toBeTruthy();
        //baseExpect(descriptions.some(desc => desc.includes(overview.products.item_Tshirt.addCart_btn))).toBeTruthy();
    }

    async getItemOnesie()
    {
        const descriptions = await this.getSumaryDescriptionsAndValidate();
        console.log('Expected:', overview.products.item_Onesie);
        baseExpect(descriptions.some(desc => desc.includes(overview.products.item_Onesie.item_title_name))).toBeTruthy();
        baseExpect(descriptions.some(desc => desc.includes(overview.products.item_Onesie.item_description))).toBeTruthy();
        baseExpect(descriptions.some(desc => desc.includes(overview.products.item_Onesie.item_price))).toBeTruthy();
        //baseExpect(descriptions.some(desc => desc.includes(overview.products.item_Onesie.addCart_btn))).toBeTruthy();
    }

    async getItemRedTshirt()
    {
        const descriptions = await this.getSumaryDescriptionsAndValidate();
        console.log('Expected:', overview.products.item_RedTshirt);
        baseExpect(descriptions.some(desc => desc.includes(overview.products.item_RedTshirt.item_title_name))).toBeTruthy();
        baseExpect(descriptions.some(desc => desc.includes(overview.products.item_RedTshirt.item_description))).toBeTruthy();
        baseExpect(descriptions.some(desc => desc.includes(overview.products.item_RedTshirt.item_price))).toBeTruthy();
        //baseExpect(descriptions.some(desc => desc.includes(overview.products.item_RedTshirt.addCart_btn))).toBeTruthy();
    }

    async getItemJacket()
    {
        const descriptions = await this.getSumaryDescriptionsAndValidate();
        console.log('Expected:', overview.products.item_Jacket);
        baseExpect(descriptions.some(desc => desc.includes(overview.products.item_Jacket.item_title_name))).toBeTruthy();
        baseExpect(descriptions.some(desc => desc.includes(overview.products.item_Jacket.item_description))).toBeTruthy();
        baseExpect(descriptions.some(desc => desc.includes(overview.products.item_Jacket.item_price))).toBeTruthy();
        //baseExpect(descriptions.some(desc => desc.includes(overview.products.item_Jacket.addCart_btn))).toBeTruthy();
    }

    async getItemBikeLight()
    {
        const descriptions = await this.getSumaryDescriptionsAndValidate();
        console.log('Expected:', overview.products.item_BikeLight);
        baseExpect(descriptions.some(desc => desc.includes(overview.products.item_BikeLight.item_title_name))).toBeTruthy();
        baseExpect(descriptions.some(desc => desc.includes(overview.products.item_BikeLight.item_description))).toBeTruthy();
        baseExpect(descriptions.some(desc => desc.includes(overview.products.item_BikeLight.item_price))).toBeTruthy();
       // baseExpect(descriptions.some(desc => desc.includes(overview.products.item_BikeLight.addCart_btn))).toBeTruthy();
    }
    async getSummaryInfo()
    {
        const descriptions = await this.getSumaryDescriptionsAndValidate();
        console.log('Expected:', overview.products.summary_Info);
        baseExpect(descriptions.some(desc => desc.includes(overview.products.summary_Info.payment_info))).toBeTruthy();
        baseExpect(descriptions.some(desc => desc.includes(overview.products.summary_Info.ship_info))).toBeTruthy();
        baseExpect(descriptions.some(desc => desc.includes(overview.products.summary_Info.total_item_price))).toBeTruthy();
        baseExpect(descriptions.some(desc => desc.includes(overview.products.summary_Info.tax))).toBeTruthy();
        //baseExpect(descriptions.some(desc => desc.includes(overview.products.summary_Info.total))).toBeTruthy();        
    }
}