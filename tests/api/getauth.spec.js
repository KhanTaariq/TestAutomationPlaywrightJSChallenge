import { test, expect } from '@playwright/test';
import {request} from '@playwright/test';
require('dotenv').config()
const baseURL = process.env.HEROKUAPP_URL || 'https://restful-booker.herokuapp.com/';

var token;
test.describe('API Tests', () => 
{
        test("Auth - CreateToken", async({request})=>
{
    const response = await request.post(`${baseURL}auth`, {
        data: {
            username: 'admin',
            password: 'password123'
        }
    });

    expect(response.ok()).toBeTruthy();
    const json = await response.json();
    token = json.token;
    console.log('Token:', token);
        
});
});
