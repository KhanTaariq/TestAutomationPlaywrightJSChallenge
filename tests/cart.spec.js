import {test} from '../pageObjects/pageObjectManager.js';

test.describe('Login with a user and verify products in cart', () => 
{

    test.beforeEach('Go to URL',async ({page}) => 
        {
        await page.goto(process.env.SAUCE_DEMO_URL);
    });

    test('Login with standard user and verify items are in cart', async ({productPage, loginPage, cartPage}) => 
    {
        //Login with standard user
        await loginPage.standarduser();

        //Add items to cart
        await productPage.getItemOnesie();
        await productPage.getItemBackpack()
        await productPage.getItemTshirt()
        await productPage.getItemJacket()
        await productPage.getItemBikeLight()
        await productPage.getItemRedTshirt()
        await productPage.goToCart();

        //Verify items in cart
        await cartPage.inToCart()
        await cartPage.getItemOnesie();
        await cartPage.getItemBackpack()
        await cartPage.getItemTshirt()
        await cartPage.getItemJacket()
        await cartPage.getItemBikeLight()
        await cartPage.getItemRedTshirt()
        await cartPage.removeAllItemsFromCart()
    });
});