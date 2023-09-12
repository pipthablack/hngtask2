# CRUD API for Managing Persons by Name

This README provides an overview of a CRUD (Create, Read, Update, Delete) API for managing persons by their name. This API allows you to perform the following operations:

- Create a new person
- Get a person by their name
- Update a person by their name
- Delete a person by their name

## API Endpoints

### Create a New Person

**Endpoint:** `POST /person`

**Request Body:** JSON object containing person details, e.g., name, age, and other attributes.

**Response:** Returns the created person with a status code of 201 (Created).

### Get a Person by Name

**Endpoint:** `GET /person/:name`

**Request Parameters:** `name` - The name of the person you want to retrieve.

**Response:** Returns the person with the specified name or a 404 (Not Found) if the person is not found.

### Update a Person by Name

**Endpoint:** `PUT /person/:name`

**Request Parameters:** `name` - The name of the person you want to update.

**Request Body:** JSON object containing the updated person details, e.g., name, age, and other attributes.

**Response:** Returns the updated person with a status code of 200 (OK) or a 404 (Not Found) if the person is not found.

### Delete a Person by Name

**Endpoint:** `DELETE /person/:name`

**Request Parameters:** `name` - The name of the person you want to delete.

**Response:** Returns a success message with a status code of 200 (OK) if the person is deleted successfully or a 404 (Not Found) if the person is not found.

## Usage Examples

Here are some examples of how to use the API endpoints:

### Create a New Person

```http
POST /person
Content-Type: application/json

{
  "name": "John Doe",
  "age": 30
}


GET /person/John Doe


PUT /person/John Doe
Content-Type: application/json

{
  "name": "Updated Name",
  "age": 35
}


DELETE /person/Updated Name





