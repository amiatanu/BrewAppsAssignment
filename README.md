# Brew Apps Assignment Introduction

This project manages a collection of books with a set of API endpoints for creating, retrieving, updating, and deleting book records.
I have hosted this in Vercel Establishing a CI/CD pipeline between GITHUB and Vercel.MongoDB Atlass is used for the Live Api You can Establish a connection with your Local MONGODB URI also,

## Getting Started

1. Install Project Dependencies:

npm i

2. Start the Project:

node index.js

## API Endpoints

Instruction:Use the Base URL before every Endpoint

- **Base URL**: [Live URL](https://brew-apps-assignment-five.vercel.app) ()

### Create a New Book

- **POST /api/addbook**

Create a new book by sending a POST request with the following request body:

```json
{
 "title": "Sample Book1",
 "author": "John Doe",
 "summary": "This is a sample book summary. It could be a brief description of the book's content and themes."
}

###Retrieve All Books

GET /api/getallbooks

Retrieve a list of all books by sending a GET request to this endpoint.

###Get Details of a Specific Book

GET /api/getsinglebook/:id

Retrieve details of a specific book by its ID. Replace :id with the actual object ID of the book. For example: /getsinglebook/653e1201121b54a8f8900f1a.

###Update Book Details
PUT /api/updatebook/:id

Update a book's details by sending a PUT request to this endpoint. Replace :id with the actual object ID of the book.

###Delete a Book
DELETE /api/deletebook/:id

Delete a book from the database by sending a DELETE request to this endpoint. Replace :id with the actual object ID of the book.
```
