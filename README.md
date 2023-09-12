# CRUD API for Managing Persons by Name

This README provides an overview of a CRUD (Create, Read, Update, Delete) API for managing persons by their name. This API allows you to perform the following operations:

- Create a new person
- Get a person by their name
- Update a person by their name
- Delete a person by their name




### Create a New Person

**https://hngtask-2.onrender.com/api/person:** `POST /person`

**Request Body:** JSON object containing person details, e.g., name and email attributes.

**Response:** Returns the created person with a status code of 201 (Created).

### Get a Person by Name

**https://hngtask-2.onrender.com/api/persons/emezue chinonso:** `GET /person/:name`

**Request Parameters:** `name` - The name of the person you want to retrieve.

**Response:** Returns the person with the specified name or a 404 (Not Found) if the person is not found.

### Update a Person by Name

**https://hngtask-2.onrender.com/api/persons/emezuechinonso:** `PUT /person/:name`

**Request Parameters:** `name` - "Emezue Ayomide".

**Request Body:**: {
   "name": "emezue ayo",
   "email": "eechinons9@gmail.com"
}. 

**Response:** Returns the updated person with a status code of 200 (OK) or a 404 (Not Found) if the person is not found : {
    "_id": "6500313300efd818cb9a0df5",
    "name": "emezue ayo",
    "email": "eechinons9@gmail.com"
}.

### Delete a Person by Name

**https://hngtask-2.onrender.com/api/person/emezueayo:** `DELETE /person/:name`

**Request Parameters:** `name` - The name of the person you want to delete.

**Response:** Returns a success message with a status code of 200 (OK):  user deleted successfully. if the person is deleted successfully or a 404 (Not Found) if the person is not found 

Here are some examples of how to use the API endpoints:

### Create a New Person

http
POST /person
Content-Type: application/json

{
  "name": "Harry Whitewell",
  "email": "hhwhitewell@gmail.com",
}


GET /person/Harry Whitewell


PUT /person/ Harry Whitewell
Content-Type: application/json

{
  "name": "Phillip Whitewell",
  "email": "phillipwhitewell@gmail.com",
}


DELETE /person/Updated Name

must return status 200 after deleting updated user name.





// UML DIAGRAM image please check screenshot

 // TESTING SCRIPTS 

 ### Create a New Person

To test creating a new person, you can use the following Postman script:

//  To create a new person
pm.sendRequest({
    url: pm.environment.get('base_url') + '/person',
    method: 'POST',
    header: 'Content-Type: application/json',
    body: {
        mode: 'raw',
        raw: JSON.stringify({
            "name": "Emezue Ayomide",
            "email": "emezue@gmail.com"
        })
    }
}, function (response) {
    pm.test('Status code is 201', function () {
        pm.response.to.have.status(201);
    });
});

 

 ### Fetch a Person by Name

To test fetching a person by name, you can use the following Postman script:

// Fetch a person by name
pm.sendRequest({
    url: pm.environment.get('base_url') + '/person/Emezue Ayomide', 
    method: 'GET',
}, function (response) {
    pm.test('Status code is 200', function () {
        pm.response.to.have.status(200);
    });

    pm.test('Response body contains person data', function () {
        const responseBody = pm.response.json();
        pm.expect(responseBody).to.have.property('name');
        pm.expect(responseBody).to.have.property('email');
    });
});


### update existing user



To test updating a user by name, you can use the following Postman script:

```javascript
// Update a user by name
pm.sendRequest({
    url: pm.environment.get('base_url') + '/user/Emezue Chinonso',
    method: 'PUT',
    header: 'Content-Type: application/json',
    body: {
        mode: 'raw',
        raw: JSON.stringify({
            "name": "Updated Name",
            "email": "updated email" // Update with the desired values.
        })
    }
}, function (response) {
    pm.test('Status code is 200', function () {
        pm.response.to.have.status(200);
    });

    pm.test('Response body contains updated user data', function () {
        const responseBody = pm.response.json();
        pm.expect(responseBody).to.be.an('object');
        pm.expect(responseBody).to.have.property('name', 'Emezue Chionso'); 
        pm.expect(responseBody).to.have.property('email', "eechinonso@gmail.com"); 
    });
});



### Delete a User by Name
pm.sendRequest({
    url: pm.environment.get('base_url') + '/user/Emezue Chinonso', 
    method: 'DELETE',
}, function (response) {
    pm.test('Status code is 200', function () {
        pm.response.to.have.status(200);
    });

    pm.test('Response body contains success message', function () {
        const responseBody = pm.response.json();
        pm.expect(responseBody).to.be.an('object');
        pm.expect(responseBody).to.have.property('message', 'User deleted successfully'); // Verify the success message.
        
    });
});
