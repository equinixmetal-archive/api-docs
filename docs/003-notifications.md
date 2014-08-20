# Group Notifications
Notifications are events that happen in the system that we want to let you know
about. Like when a user is added to an organization, for example.

## Notifications [/notifications]
A collection of the current user's notifications.

### Retrieve all Notifications [GET]
Returns a list of the current user's notifications.

+ Response 200

## Notification [/notifications/{id}]
A single notification object.

A notification has the following properties:

- id
- body
- is_read
- user
- created_at
- updated_at

+ Parameters
  + id (string) ... The notification ID (in the form of a UUID).

### Retrieve a Notification [GET]
+ Response 200

### Update a Notification [PATCH]
+ Response 204
