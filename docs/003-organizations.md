# Group Organizations
Manage your organizations and their members.

## Organizations [/organizations]
A collection of organizations that the current user belongs to.

### Retrieve all Organizations [GET]
Returns a list of all organizations that the current user belongs to.

+ Response 200

### Create an Organization [POST]
Creates a new organization. The current user will automatically be added as the
organization owner.

An organization must have the following properties:

- name

+ Response 201

## Organization [/organizations/{id}]
A single organization object. An organization is a collection of users that can
be associated with a device.

An organization has the following properties:

- id
- name
- created_at
- updated_at
- members
- memberships

+ Parameters
  + id (string) ... The organization ID (in the form of a UUID).

### Retrieve an Organization [GET]
+ Response 200

### Update an Organization [PATCH]
+ Response 204

### Delete an Organization [DELETE]
+ Response 204
