import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { BookStorePage } from '../pages/BookStorePage';
const { writeToFile } = require('../utils/fileUtils');
const env = require('../utils/env');

test('Demoqa Book Store Testcase', async({ page })=>{

	const homePage = new HomePage(page);
	const loginPage = new LoginPage(page);
	const bookStorePage = new BookStorePage(page);

	const bookName = "Learning JavaScript Design Patterns";
	//Navigate to portal
	const url = "https://demoqa.com/";
	homePage.navigateToURL(url);

	//click on Book Store Applicatiom
	await homePage.clickBookStoreApplication();

	//click on login button 
	await loginPage.clickLoginBtn();

	//login on portal
	await loginPage.login(env.username, env.password);

	//Validation of username and logout button
	expect(await loginPage.isUsernameVisble()).toBe(env.username);
	expect(await loginPage.isLogoutBtnVisible()).toBeTruthy();

	//click on 'Go To Book Store' button
	await bookStorePage.goBackToBookStore();

	//search box
	await bookStorePage.searchBook(bookName);

	//Validate search result
	expect(await bookStorePage.isBookVisible()).toBeTruthy();

	//Extract details on file
	const title = await bookStorePage.getTitle();
	const author = await bookStorePage.getAuthor();
	const publisher = await bookStorePage.getPublisher();

	const details = `Title: ${title}
	Author: ${author}
	Publisher: ${publisher}`;

    // Write to file
    writeToFile(details);

    // Logout
    await bookStorePage.clickLogoutBtn();
	await page.screenshot({path: "./Screenshot/screenshot.png"});
})
