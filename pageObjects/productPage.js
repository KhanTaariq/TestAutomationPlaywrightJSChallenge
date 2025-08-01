import {products} from '../testDataFixtures/invintoryManagment/productFixture.json';
import{test as base, expect as baseExpect} from '@playwright/test';

export class ProductPage
{
    constructor(page)
    {
        this.page = page;
        this.backpackBtn = page.locator("#add-to-cart-sauce-labs-backpack");
        this.boltshirtBtn = page.locator("#add-to-cart-sauce-labs-bolt-t-shirt");
        this.bikelightBtn = page.locator("#add-to-cart-sauce-labs-bike-light");
        this.fleecejacketBtn = page.locator("#add-to-cart-sauce-labs-fleece-jacket");
        this.onesieBtn = page.locator("#add-to-cart-sauce-labs-onesie");
        this.redshirtBtn = page.locator("//*[@id='add-to-cart-test.allthethings()-t-shirt-(red)']");
        this.cartBtn = page.locator("#shopping_cart_container > a"); 
    }

    async goToCart()
    {
        await baseExpect(this.cartBtn).toBeVisible();
        await this.cartBtn.click();
    }

    async getAllInventoryItemDescriptionsAndValidate()
    {
        // Find all matching elements of this locator
        const items = await this.page.locator("//div[@class='inventory_item']//div[@class='inventory_item_description']").all();
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
        console.log('Expected:', products.item_Backpack);
        //and validating the item description, title and price
        baseExpect(descriptions.some(desc => desc.includes(products.item_Backpack.item_title_name))).toBeTruthy();
        baseExpect(descriptions.some(desc => desc.includes(products.item_Backpack.item_description))).toBeTruthy();
        baseExpect(descriptions.some(desc => desc.includes(products.item_Backpack.item_price))).toBeTruthy();
        //baseExpect(descriptions.some(desc => desc.includes(products.item_Backpack.addCart_btn))).toBeTruthy();
    }

    async getItemBackpack()
    {
        const descriptions = await this.getAllInventoryItemDescriptionsAndValidate();
        await this.helperGetItemBackpack(descriptions); // Pass descriptions to the helper
        baseExpect(descriptions.some(desc => desc.includes(products.item_Backpack.addCart_btn))).toBeTruthy();
        await this.backpackBtn.click();
    }

    async getItemTshirt()
    {
        const descriptions = await this.getAllInventoryItemDescriptionsAndValidate();
        console.log('Expected:', products.item_Tshirt);
        baseExpect(descriptions.some(desc => desc.includes(products.item_Tshirt.item_title_name))).toBeTruthy();
        baseExpect(descriptions.some(desc => desc.includes(products.item_Tshirt.item_description))).toBeTruthy();
        baseExpect(descriptions.some(desc => desc.includes(products.item_Tshirt.item_price))).toBeTruthy();
        baseExpect(descriptions.some(desc => desc.includes(products.item_Tshirt.addCart_btn))).toBeTruthy();
        await this.boltshirtBtn.click();
    }

    async getItemOnesie()
    {
        const descriptions = await this.getAllInventoryItemDescriptionsAndValidate();
        console.log('Expected:', products.item_Onesie);
        baseExpect(descriptions.some(desc => desc.includes(products.item_Onesie.item_title_name))).toBeTruthy();
        baseExpect(descriptions.some(desc => desc.includes(products.item_Onesie.item_description))).toBeTruthy();
        baseExpect(descriptions.some(desc => desc.includes(products.item_Onesie.item_price))).toBeTruthy();
        baseExpect(descriptions.some(desc => desc.includes(products.item_Onesie.addCart_btn))).toBeTruthy();
        await this.onesieBtn.click();
    }

    async getItemRedTshirt()
    {
        const descriptions = await this.getAllInventoryItemDescriptionsAndValidate();
        console.log('Expected:', products.item_RedTshirt);
        baseExpect(descriptions.some(desc => desc.includes(products.item_RedTshirt.item_title_name))).toBeTruthy();
        baseExpect(descriptions.some(desc => desc.includes(products.item_RedTshirt.item_description))).toBeTruthy();
        baseExpect(descriptions.some(desc => desc.includes(products.item_RedTshirt.item_price))).toBeTruthy();
        baseExpect(descriptions.some(desc => desc.includes(products.item_RedTshirt.addCart_btn))).toBeTruthy();
        await this.redshirtBtn.click();
    }

    async getItemJacket()
    {
        const descriptions = await this.getAllInventoryItemDescriptionsAndValidate();
        console.log('Expected:', products.item_Jacket);
        baseExpect(descriptions.some(desc => desc.includes(products.item_Jacket.item_title_name))).toBeTruthy();
        baseExpect(descriptions.some(desc => desc.includes(products.item_Jacket.item_description))).toBeTruthy();
        baseExpect(descriptions.some(desc => desc.includes(products.item_Jacket.item_price))).toBeTruthy();
        baseExpect(descriptions.some(desc => desc.includes(products.item_Jacket.addCart_btn))).toBeTruthy();
        await this.fleecejacketBtn.click();
    }

    async getItemBikeLight()
    {
        const descriptions = await this.getAllInventoryItemDescriptionsAndValidate();
        console.log('Expected:', products.item_BikeLight);
        baseExpect(descriptions.some(desc => desc.includes(products.item_BikeLight.item_title_name))).toBeTruthy();
        baseExpect(descriptions.some(desc => desc.includes(products.item_BikeLight.item_description))).toBeTruthy();
        baseExpect(descriptions.some(desc => desc.includes(products.item_BikeLight.item_price))).toBeTruthy();
        baseExpect(descriptions.some(desc => desc.includes(products.item_BikeLight.addCart_btn))).toBeTruthy();
        await this.bikelightBtn.click();
    }
}