export class BookStorePage
{
	constructor(page)
	{
		this.page = page;
		this.goToBookStoreBtn = page.locator("#gotoStore");
		this.searchBox = page.locator("#searchBox");
		this.bookTitle = page.locator("//a[normalize-space()='Learning JavaScript Design Patterns']");
		this.authorName = page.locator("//td[normalize-space()='Addy Osmani']");
		this.publisherName = page.locator("//tbody//tr//td[4]");
		this.secondLogoutBtn = page.getByRole('button', { name: 'Log out' });
	}

	async goBackToBookStore()
	{
		await this.goToBookStoreBtn.click();
	}
	async searchBook(bookName)
	{
		await this.searchBox.fill(bookName);
	}

	async isBookVisible()
	{
		return await this.bookTitle.isVisible();
	}

	async getTitle()
	{
		return await this.bookTitle.textContent();
	}

	async getAuthor()
	{
		return await this.authorName.textContent();
	}

	async getPublisher()
	{
		return await this.publisherName.textContent();
	}

	async clickLogoutBtn()
	{
		await this.secondLogoutBtn.click();
	}
}