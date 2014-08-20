# Group Support
Manage support tickets.

## Tickets [/tickets]
A collection of support tickets that the current user has access to.

### Retrieve all Tickets [GET]
Returns a list of all tickets that the current user can access.

+ Response 200

### Create a Ticket [POST]
Creates a new support ticket.

A ticket must have the following properties:

- title
- body
- organization

+ Response 201

## Ticket [/tickets/{id}]
A single support ticket object.

A ticket has the following properties:

- id
- title
- body
- status (`open` or `closed`)
- organization
- created_by
- created_at
- updated_at

+ Parameters
  + id (string) ... The ticket ID (in the form of a UUID).

### Retrieve a Ticket [GET]
+ Response 200

### Update a Ticket [PATCH]
+ Response 204

### Delete a Ticket [DELETE]
+ Response 204

## Ticket Comments [/ticket/{ticket_id}/comments]
A collection of comments for a given ticket.

+ Parameters
  + ticket_id (string) ... The ticket ID (in the form of a UUID).

### Retrieve all Ticket Comments [GET]
Returns a list of all comments for a given ticket.

+ Response 200

### Create a Ticket Comment [POST]
Create a new comment for the given ticket.

+ Response 201

## Ticket Comment [/comments/{id}]
A single ticket comment object.

A ticket comment has the following properties:

- id
- body
- created_by
- created_at
- updated_at

+ Parameters
  + id (string) ... The ID of the ticket comment (as a UUID).

### Retrieve a Ticket Comment [GET]
Returns a single ticket comment object.

+ Response 200

### Update a Ticket Comment [PATCH]
Update a ticket comment.

+ Response 204

### Delete a Ticket Comment [DELETE]
Delete a ticket comment.

+ Response 204
