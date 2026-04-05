const { request } = require('@playwright/test');
const env = require('../utils/env');

export class userAPI
{
	constructor()
	{
		this.apiUrl = env.API_BASE_URL;
	}

	async createUser(name, job)
	{
		const apiContext = await request.newContext();

		//creating a new user
        const response = await apiContext.post(this.apiUrl, { 
			data: { name, job },
			headers: {
				'Content-Type': 'application/json',
				'x-api-key': 'pub_4692dfeef101a72683f2704b24cd2cc60b9cabd704f0498acad9dc85d664dcb2'
			  }
			});
        const data = await response.json();

		//validating the status code
        return { status: response.status(), data };
	}

	async getUser(userId)
	{
		const apiContext = await request.newContext();
		const response = await apiContext.get(`${this.apiUrl}/${userId}`,{
			headers: {
				'Content-Type': 'application/json',
				'x-api-key': 'pub_4692dfeef101a72683f2704b24cd2cc60b9cabd704f0498acad9dc85d664dcb2'
			  }
		});
		const data = await response.json();
        return { status: response.status(), data };
	}

	async updateUser(userId, name, job)
	{
		const apiContext = await request.newContext();
        const response = await apiContext.put(`${this.apiUrl}/${userId}`, {
			data: { name, job },
			headers: {
				'Content-Type': 'application/json',
				'x-api-key': 'pub_4692dfeef101a72683f2704b24cd2cc60b9cabd704f0498acad9dc85d664dcb2',
			  }
			});
        const data = await response.json();
        return { status: response.status(), data };
	}
}