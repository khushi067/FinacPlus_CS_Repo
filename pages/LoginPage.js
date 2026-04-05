export class LoginPage{
	constructor(page) {
		this.page = page;
		this.loginBtn = page.getByRole('button', { name: 'Login' });
		this.usernameInput = page.getByPlaceholder('UserName');
		this.passwordInput = page.getByPlaceholder('Password');
		this.usernameValidation = page.locator("#userName-value");
		this.firstLogoutBtn = page.locator("//div[@class='ms-auto text-end col-md-4 col-sm-12']//button[@id='submit']");
	}

	async clickLoginBtn()
	{
		await this.loginBtn.click();
	}

	async login(username, password)
	{
		await this.usernameInput.fill(username);
		await this.passwordInput.fill(password);
		await this.loginBtn.click();
	}

	async isUsernameVisble()
	{
		return await this.usernameValidation.textContent();
	}

	async isLogoutBtnVisible()
	{
		return await this.firstLogoutBtn.isVisible();
	}

}