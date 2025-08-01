import {test} from '../pageObjects/pageObjectManager.js';


test.describe('Verify login credentials with diffrent users', () => {

    test.beforeEach('Go to URL',async ({page}) => 
    {
        await page.goto(process.env.SAUCE_DEMO_URL);
    });
    
    test('verify login functionality with standard user', async ({loginPage}) => 
    {
        await loginPage.standarduser();
    });
    
    test('verify login functionality with locked out user', async ({loginPage}) => 
    {
        await loginPage.lockedoutuser();
        // Verify locked out user error message
        await loginPage.lckoutusererr();
    });

    test('verify login functionality with problem user', async ({loginPage}) => 
    {
        await loginPage.problemuser();
    });

    test('verify login functionality with performance glitch user', async ({loginPage}) => 
    {
        await loginPage.perfglitchuser();
    });

    test('verify login functionality with error user', async ({loginPage}) => 
    {
        await loginPage.erruser();
    });

    test('verify login functionality with visual user', async ({loginPage}) => 
    {
        await loginPage.visualuser();
    });
   
});