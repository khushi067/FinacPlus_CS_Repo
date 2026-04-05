**Overview**

This project contains automation scripts for testing the functionality of a web application and REST APIs.

UI Automation covers user login, book search, and validation on Demo QA
.
API Automation covers CRUD operations on users using Reqres API
.
---Technologies Used---
Programming Language: [JavaScript]
UI Automation: Playwright
API Automation: Requests, APIRequestContext fixture of Playwright

**UI Automation**

Scenario:
Navigate to Demo QA
Manually create a new user (registration not automated).
Navigate to the Books Store Application.
Login using the newly created user.
Validate username and logout button.
Click on Book Store button.
Search for "Learning JavaScript Design Patterns".
Validate search result contains the book.
Print Title, Author, and Publisher into a file.
Logout.

**API Automation**

Scenario:
Base URL: https://reqres.in/
Create a new user and validate HTTP status code.
Fetch and store userId.
Get the created user details and validate data.
Update user's name and validate the updated response.
How to Run

Clone the repository:

git clone https://github.com/khushi067/FinacPlus_CS_Repo.git

Notes:
UI tests assume the user is already manually registered.
Search results and API responses are validated according to the assignment requirements.
