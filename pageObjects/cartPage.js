import {cart} from '../testDataFixtures/invintoryManagment/cartFixture.json';
import{test as base, expect as baseExpect} from '@playwright/test';

export class CartPage
{
    constructor(page)
    {
        this.page = page;
        this.cartList = page.locator("[data-test='cart-list']");
        this.rmbackpackBtn = page.locator("#remove-sauce-labs-backpack");
        this.rmboltshirtBtn = page.locator("#remove-sauce-labs-bolt-t-shirt");
        this.rmbikelightBtn = page.locator("#remove-sauce-labs-bike-light");
        this.rmfleecejacketBtn = page.locator("#remove-sauce-labs-fleece-jacket");
        this.rmonesieBtn = page.locator("#remove-sauce-labs-onesie");
        this.rmredshirtBtn = page.locator("//*[@id='remove-test.allthethings()-t-shirt-(red)']");
        this.rmcartBtn = page.locator("#shopping_cart_container > a"); 
        this.chkOutBtn = page.locator("#checkout");
    }

    async checkOut()
    {
        await baseExpect(this.chkOutBtn).toBeVisible();
        await this.chkOutBtn.click();
    }
    async inToCart()
    {
        await baseExpect(this.cartList).toBeVisible();
    }

    async getAllCartListItemDescriptions() 
    {
        // Find all matching elements inside the cart list
        const items = await this.page.locator("[data-test='cart-list']").all();
        // Store their text content in an array
        const descriptions = [];
        for (const item of items) {
            descriptions.push(await item.textContent());
        }
        console.log('Cart List Descriptions:', descriptions);
        //console.log('Expected:', cart.products.cart.products.item_Backpack);
        // When constructing CartPage, pass productPage
        //await this.productPage.helperGetItemBackpack(descriptions);
        return descriptions;

    }

    async helperGetItemBackpack(descriptions)
    {
        console.log('Expected:', cart.products.item_Backpack);
        //and validating the item description, title and price
        baseExpect(descriptions.some(desc => desc.includes(cart.products.item_Backpack.item_title_name))).toBeTruthy();
        baseExpect(descriptions.some(desc => desc.includes(cart.products.item_Backpack.item_description))).toBeTruthy();
        baseExpect(descriptions.some(desc => desc.includes(cart.products.item_Backpack.item_price))).toBeTruthy();
        //baseExpect(descriptions.some(desc => desc.includes(cart.products.item_Backpack.removeBtn))).toBeTruthy();
    }

    async getItemBackpack()
    {
        const descriptions = await this.getAllCartListItemDescriptions();
        await this.helperGetItemBackpack(descriptions); // Pass descriptions to the helper
        baseExpect(descriptions.some(desc => desc.includes(cart.products.item_Backpack.removeBtn))).toBeTruthy();
        //await this.rmbackpackBtn.click();
    }

    async getItemTshirt()
    {
        const descriptions = await this.getAllCartListItemDescriptions();
        console.log('Expected:', cart.products.item_Tshirt);
        baseExpect(descriptions.some(desc => desc.includes(cart.products.item_Tshirt.item_title_name))).toBeTruthy();
        baseExpect(descriptions.some(desc => desc.includes(cart.products.item_Tshirt.item_description))).toBeTruthy();
        baseExpect(descriptions.some(desc => desc.includes(cart.products.item_Tshirt.item_price))).toBeTruthy();
        baseExpect(descriptions.some(desc => desc.includes(cart.products.item_Tshirt.removeBtn))).toBeTruthy();
        //await this.rmboltshirtBtn.click();
    }

    async getItemOnesie()
    {
        const descriptions = await this.getAllCartListItemDescriptions();
        console.log('Expected:', cart.products.item_Onesie);
        baseExpect(descriptions.some(desc => desc.includes(cart.products.item_Onesie.item_title_name))).toBeTruthy();
        baseExpect(descriptions.some(desc => desc.includes(cart.products.item_Onesie.item_description))).toBeTruthy();
        baseExpect(descriptions.some(desc => desc.includes(cart.products.item_Onesie.item_price))).toBeTruthy();
        baseExpect(descriptions.some(desc => desc.includes(cart.products.item_Onesie.removeBtn))).toBeTruthy();
        //await this.rmonesieBtn.click();
    }

    async getItemRedTshirt()
    {
        const descriptions = await this.getAllCartListItemDescriptions();
        console.log('Expected:', cart.products.item_RedTshirt);
        baseExpect(descriptions.some(desc => desc.includes(cart.products.item_RedTshirt.item_title_name))).toBeTruthy();
        baseExpect(descriptions.some(desc => desc.includes(cart.products.item_RedTshirt.item_description))).toBeTruthy();
        baseExpect(descriptions.some(desc => desc.includes(cart.products.item_RedTshirt.item_price))).toBeTruthy();
        baseExpect(descriptions.some(desc => desc.includes(cart.products.item_RedTshirt.removeBtn))).toBeTruthy();
        //await this.rmredshirtBtn.click();
    }

    async getItemJacket()
    {
        const descriptions = await this.getAllCartListItemDescriptions();
        console.log('Expected:', cart.products.item_Jacket);
        baseExpect(descriptions.some(desc => desc.includes(cart.products.item_Jacket.item_title_name))).toBeTruthy();
        baseExpect(descriptions.some(desc => desc.includes(cart.products.item_Jacket.item_description))).toBeTruthy();
        baseExpect(descriptions.some(desc => desc.includes(cart.products.item_Jacket.item_price))).toBeTruthy();
        baseExpect(descriptions.some(desc => desc.includes(cart.products.item_Jacket.removeBtn))).toBeTruthy();
        //await this.rmfleecejacketBtn.click();
    }

    async getItemBikeLight()
    {
        const descriptions = await this.getAllCartListItemDescriptions();
        console.log('Expected:', cart.products.item_BikeLight);
        baseExpect(descriptions.some(desc => desc.includes(cart.products.item_BikeLight.item_title_name))).toBeTruthy();
        baseExpect(descriptions.some(desc => desc.includes(cart.products.item_BikeLight.item_description))).toBeTruthy();
        baseExpect(descriptions.some(desc => desc.includes(cart.products.item_BikeLight.item_price))).toBeTruthy();
        baseExpect(descriptions.some(desc => desc.includes(cart.products.item_BikeLight.removeBtn))).toBeTruthy();
        //await this.rmbikelightBtn.click();
    }
    async removeAllItemsFromCart()
    {
        await this.rmonesieBtn.click();
        await this.rmbackpackBtn.click();
        await this.rmboltshirtBtn.click();
        await this.rmredshirtBtn.click();
        await this.rmfleecejacketBtn.click();
        await this.rmbikelightBtn.click();
    }
}