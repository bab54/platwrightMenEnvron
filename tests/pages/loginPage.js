import { expect } from '@playwright/test';
class LoginPage
{
    constructor(page)
    {
        this.page = page;
        this.accountButton =page.getByRole('button', { name: 'My Account' });
        this.emailField=page.locator('input[name="email_address"]')
        this.passwordField=page.locator('input[name="password"]')
        this.signInButton =page.getByRole('button', { name: 'Sign In' })
        this.message = page.getByRole('heading', { name: 'My Account Information' })
        this.message1 = page.locator('h1')
    }
    async navigateToWebsite(url)
    
    {
        await this.page.goto(url)
    }
    async clickAccountButton()
    {
        await  this.accountButton.click()
    }
    async enterEmail(email)
    {
        await this.emailField.fill(email)
    }
     async enterPassword(password)
    {
        await this.passwordField.fill(password)
    }
    async clickSignInButton()
    {
        await this.signInButton.click()
    }

    async VerifyMessage(message)
    {
        await expect(this.message).toBeVisible()
        await expect( this.message1).toContainText(message)
    }
}

module.exports ={ LoginPage}