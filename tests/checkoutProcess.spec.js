import {test} from '../pageObjects/pageObjectManager.js';

test.describe('Login with a user add products to basket and checkout', () => 
{

    test.beforeEach('Go to URL',async ({page}) => 
        {
        await page.goto(process.env.SAUCE_DEMO_URL);
    });

    test('Login with standard user adn go through checkout', async ({productPage, loginPage, cartPage, checkoutInfoPage, checkoutCompletePage, checkoutOverviewPage}) => 
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
        await cartPage.checkOut();

        //Input checkout information
        await checkoutInfoPage.inputYourInfo()

        //Verify checkout overview
        await checkoutOverviewPage.verifyOverviewPage()
        await checkoutOverviewPage.getItemOnesie();
        await checkoutOverviewPage.getItemBackpack()
        await checkoutOverviewPage.getItemTshirt()
        await checkoutOverviewPage.getItemJacket()
        await checkoutOverviewPage.getItemBikeLight()
        await checkoutOverviewPage.getItemRedTshirt()
        await checkoutOverviewPage.getSummaryInfo()
        await checkoutOverviewPage.finishPurchase();

        //Verify checkout complete
        await checkoutCompletePage.verfiyCompletedMsg();
        await checkoutCompletePage.goBackToHome();

    });
});