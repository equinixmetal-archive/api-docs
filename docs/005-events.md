# Group Events
Events are things that happen in the system that are worth tracking, but not
necessarily worth sending users a notification about. An example of this is
when a new user is added to an organization that you're a part of.

## Events [/events]
A collection of events pertaining to the current user, their devices, or their
organizations.

### Retrieve all Events [GET]
Returns a list of the current user's events.

+ Response 200

## Event [/events/{id}]
A single event object.

An event has the following properties:

- id
- body
- type
- user
- created_at
- updated_at

+ Parameters
  + id (string) ... The event ID (in the form of a UUID).

### Retrieve an Event [GET]
+ Response 200
