import {users, password, userErr} from '../testDataFixtures/loginCredentials.json';
import{test as base, expect as baseExpect} from '@playwright/test';
export class LoginPage
{
    constructor(page)
    {
        this.page = page;
        this.usernameField = page.locator("#user-name");
        this.pswrdField = page.locator("#password");
        this.lckUserError = page.locator("[data-test='error']");
        this.loginbtn = page.locator("#login-button");
    }

    async standarduser()
    {
        await baseExpect(this.usernameField).toBeVisible();
        await this.usernameField.fill(users.standardUser);
        const value = await this.usernameField.inputValue();
        if (value !== users.standardUser)
            {
                throw new Error(`Expected username "${users.standardUser}", but got "${value}"`);
            }
        await baseExpect(this.pswrdField).toBeVisible();
        await this.pswrdField.fill(password.pswrd);
        const pswrdValue = await this.pswrdField.inputValue();
        if (pswrdValue !== password.pswrd)
            {
                throw new Error(`Expected password "${password.pswrd}", but got "${pswrdValue}"`);
            }
        await this.loginbtn.click();
    }
    async lockedoutuser()
    {
        await baseExpect(this.usernameField).toBeVisible();
        await this.usernameField.fill(users.lockedOutUser);
        const value = await this.usernameField.inputValue();
        if (value !== users.lockedOutUser)
            {
                throw new Error(`Expected username "${users.lockedOutUser}", but got "${value}"`);
            }
        await baseExpect(this.pswrdField).toBeVisible();
        await this.pswrdField.fill(password.pswrd);
        const pswrdValue = await this.pswrdField.inputValue();
        if (pswrdValue !== password.pswrd)
            {
                throw new Error(`Expected password "${password.pswrd}", but got "${pswrdValue}"`);
            }
        
    }
    async lckoutusererr()
    {
        await baseExpect(this.loginbtn).toBeVisible();
        await this.loginbtn.click();
        await baseExpect(this.lckUserError).toBeVisible();
        await baseExpect(this.lckUserError).toContainText(userErr.lockedOutUserErr);
    }

    async problemuser()
    {
        await baseExpect(this.usernameField).toBeVisible();
        await this.usernameField.fill(users.problemUser);
        const value = await this.usernameField.inputValue();
        if (value !== users.problemUser)
            {
                throw new Error(`Expected username "${users.problemUser}", but got "${value}"`);
            }
        await baseExpect(this.pswrdField).toBeVisible();
        await this.pswrdField.fill(password.pswrd);
        const pswrdValue = await this.pswrdField.inputValue();
        if (pswrdValue !== password.pswrd)
            {
                throw new Error(`Expected password "${password.pswrd}", but got "${pswrdValue}"`);
            }
    }
 
    async perfglitchuser()
    {
        await baseExpect(this.usernameField).toBeVisible();
        await this.usernameField.fill(users.perfGlitchUser);
        const value = await this.usernameField.inputValue();
        if (value !== users.perfGlitchUser)
            {
                throw new Error(`Expected username "${users.perfGlitchUser}", but got "${value}"`);
            }
        await baseExpect(this.pswrdField).toBeVisible();
        await this.pswrdField.fill(password.pswrd);
        const pswrdValue = await this.pswrdField.inputValue();
        if (pswrdValue !== password.pswrd)
            {
                throw new Error(`Expected password "${password.pswrd}", but got "${pswrdValue}"`);
            }
    }
    
    async erruser()
    {
        await baseExpect(this.usernameField).toBeVisible();
        await this.usernameField.fill(users.errUser);
        const value = await this.usernameField.inputValue();
        if (value !== users.errUser)
            {
                throw new Error(`Expected username "${users.errUser}", but got "${value}"`);
            }
        await baseExpect(this.pswrdField).toBeVisible();
        await this.pswrdField.fill(password.pswrd);
        const pswrdValue = await this.pswrdField.inputValue();
        if (pswrdValue !== password.pswrd)
            {
                throw new Error(`Expected password "${password.pswrd}", but got "${pswrdValue}"`);
            }
    }
    
    async visualuser()
    {
        await baseExpect(this.usernameField).toBeVisible();
        await this.usernameField.fill(users.visualUser);
        const value = await this.usernameField.inputValue();
        if (value !== users.visualUser)
            {
                throw new Error(`Expected username "${users.visualUser}", but got "${value}"`);
            }
        await baseExpect(this.pswrdField).toBeVisible();
        await this.pswrdField.fill(password.pswrd);
        const pswrdValue = await this.pswrdField.inputValue();
        if (pswrdValue !== password.pswrd)
            {
                throw new Error(`Expected password "${password.pswrd}", but got "${pswrdValue}"`);
            }
    }
}

