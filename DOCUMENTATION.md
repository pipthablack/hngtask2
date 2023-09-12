# CRUD API Documentation

This documentation provides details on how to use the CRUD (Create, Read, Update, Delete) API for managing persons. This API allows you to perform various operations on person records.

## API Endpoints

### Create a New Person

- **Endpoint:** `POST /api/persons`
- **Request Body:** JSON object containing person details (e.g., name, email).
- **Response:** Returns the created person with a status code of 201 (Created).

#### Sample Request

```http
https://hngtask-2.onrender.com/api/person
Content-Type: application/json

{
  "name": "Emezue Chinonso",
  "email": "eechinonso@gmail.com"
}



### Get all persons 

GET https://hngtask-2.onrender.com/api/persons/emezue chinonso

Sample Response (Success)

[
    {
        "_id": "6500313300efd818cb9a0df5",
        "name": "emezue chinonso",
        "email": "eechinonso34@gmail.com"
    },
    {
        "_id": "6500406cb7ed0dfc2ba92252",
        "name": "emezue chinonso",
        "email": "echinonso4@gmail.com"
    }
]

Update a Person
Endpoint: PUT /api/person/:name
Request Parameters: name - The unique identifier of the person to update.

PUT /api/persons/1
Content-Type: application/json

{
    "name": "emezue ayomide",
    "email": "eechinonso3@gmail.com"
    
}


Success message : {
    "_id": "650043b9fc0ac853c1962efd",
    "name": "emezue ayomide",
    "email": "eechinonso3@gmail.com"
}


Delete a Person
Endpoint: DELETE /api/person/:name
Request Parameters: name - The unique identifier of the person to delete.

{
  "message": "User deleted successfully"
}



Request and Response Formats
The request body for creating and updating a person should be in JSON format.
Responses will be in JSON format, with the specific properties and structure outlined for each endpoint.



Local Setup and Deployment
To set up and deploy this API locally or on a server, follow these steps:

Clone the repository from GitHub.
Install the necessary dependencies using npm install.
Configure environment variables such as the database connection.
Start the API server using npm start.
Access the API using the specified endpoints.