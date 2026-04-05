export class HomePage
{
	constructor(page)
	{
		this.page = page;
		this.bookstoreappButton = this.page.getByText("Book Store Application");
	}

	async navigateToURL(url)
	{
		await this.page.goto(url);
	}

	async clickBookStoreApplication()
	{
		await this.bookstoreappButton.click();
	}
}