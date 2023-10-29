Install project dependencies:
npm i

==========Api Endpoint=========
Live URL :https://brew-apps-assignment-five.vercel.app

==API Endpoints===

POST api/addbook: Create a new book.
Request Body:
{
  "title": "Sample Book1",
  "author": "John Doe",
  "summary": "This is a sample book summary. It could be a brief description of the book's content and themes."
}

GET api/getallbooks: Retrieve a list of all books.
GET api/getsinglebook/:id: Get details of a specific book by its ID.(id is object id of the document which you can get by calling the /getallbooks endpoint also)
PUT api/updatebook/:id: Update a book's details.(id is object id of the document )
DELETE /deletebook/:id: Delete a book from the database.(id is object id of the document)

