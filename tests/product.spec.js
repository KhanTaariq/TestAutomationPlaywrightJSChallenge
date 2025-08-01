import {test} from '../pageObjects/pageObjectManager.js';

test.describe('Login with a user and verify products on the product page', () => 
{

    test.beforeEach('Go to URL',async ({page}) => 
    {
        // Navigate to the Sauce Demo URL
        await page.goto(process.env.SAUCE_DEMO_URL);
    });

    test('Logging in with standard user and verifying all products', async ({loginPage, productPage}) =>
    {
        //Login with standard user
        await loginPage.standarduser();
        //Verify all products are visible
        await productPage.getItemOnesie();
        await productPage.getItemBackpack()
        await productPage.getItemTshirt()
        await productPage.getItemJacket()
        await productPage.getItemBikeLight()
        await productPage.getItemRedTshirt()
    });
});