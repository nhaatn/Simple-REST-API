# Simple **REST API** built with NodeJS and EXPRESS


### Representational State Transfer (REST)
### This project demonstrates the CRUD operations
- C - create a user (PUT request)
- R - retrieve a user (GET request)
- U - update a user (PATCH request)
- D - delete a user (DELETE request)


## How to run the app
1. Run 'npm install' after cloning repository.
2. Run 'npm start' to start nodemon.
3. Open POSTMAN and type 'http://localhost:5000' into the URL area. 
4. **Select 'body' -> 'raw' -> then click on the dropdown and select 'JSON'**
4. Make a GET request and click send. It will show the empty array.
6. Make a POST request to add a new user. (Copy the user.json file and add it to the post request).
7. Make another POST request and add another user with a DIFFERENT NAME.
8. Now make a GET request to this URL 'http://localhost:5000/users'. You can now see the 2 users that was added.
9. Copy the ID of the user that you want to edit/update and append it to the current URL like so 'http://localhost:5000/users/yourUserIdHere'.
10. Now make a PATCH request and change LAST NAME of the user and click send
11. Make a GET request again with the URL of 'http://localhost:5000/users' to see your update
12. DELETE a user by copying the ID again and appending it to the url (dont forget to select DELETE in POSTMAN)
13. Repeat step 11 to see update.