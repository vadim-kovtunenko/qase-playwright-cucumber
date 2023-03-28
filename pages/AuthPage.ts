import { Page } from '@playwright/test'

export class AuthPage {
    private page: Page

    public locators = {
        login: 'input[type="email"]',
        password: 'input[type="password"]',
        loginButton: 'button[data-qase-test="login-button"]',
        checkboxRememberMe: 'span[data-qase-test="remember-me-checkbox"]',
        submitChangePassword: 'a[data-qase-test="forgot-password-button"]',
        submitSignUp: 'a[data-qase-test="sign-up-button"]'
    }

    constructor(page:Page) {
        this.page = page
    }

    public async goto() {
        await this.page.goto('/login')
    }

    public async fillLogin(login:string) {
        const loginField = this.page.locator(this.locators.login)
        await loginField.type(login)
    }

    public async fillPassword(password:string) {
        const passwordField = this.page.locator(this.locators.login)
        await passwordField.type(password)
    }

    public async submit() {
        const submitButton = this.page.locator(this.locators.loginButton)
        await submitButton.click()
    }
}