import { test, expect, request } from '@playwright/test';
import { userAPI } from '../api/userAPI';

test.describe('API testing', ()=> {

	const apiObject = new userAPI();
	let userId;

	test('create, get and update the user', async()=>{

		//Create
		const create = await apiObject.createUser('khushitest', 'Tester');
		expect(create.status).toBe(201);
		expect(create.data.name).toBe('khushitest');
		userId = create.data.id;
		
		//Get
        const get = await apiObject.getUser(2);
		expect(get.status).toBe(200);

        // Update
        const update = await apiObject.updateUser(userId, 'Jane testDoe', 'Tester');
        expect(update.status).toBe(200);

	})
})