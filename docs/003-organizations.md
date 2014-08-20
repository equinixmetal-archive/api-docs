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

## Memberships [/memberships]
Users are related to organizations through memberships.

### Retrieve all Memberships [GET]
Returns a list of all memberships a user can access.

+ Response 200

    + Body

            {
                "memberships": [
                    { "href": "https://api.packethost.net/memberships/E6AA9ABD-32BA-4260-A1E8-DE660E9523E5" },
                    { "href": "https://api.packethost.net/memberships/2937D091-3EA4-4E3F-BB73-950F8CBAE03E" },
                    { "href": "https://api.packethost.net/memberships/3F11AD73-E9A8-48BA-B177-FDC66E56BEDB" }
                ],
                "meta": {
                }
            }

### Create a Membership [POST]
Creates a new membership for a given user and organization.

+ Request

    + Body

            {
                "user": "7976E8D9-F3D6-4D19-BD41-8C2F88E088BE",
                "organization": "40F858EB-79F2-4BFA-BD5D-C531F7827B31",
                "capacity": "Billing Contact",
                "roles": [ "superadmin" ]
            }

+ Response 201

    + Headers

            Link: https://api.packethost.net/memberships/E6AA9ABD-32BA-4260-A1E8-DE660E9523E5; rel="membership"

    + Body

            {
                "href": "https://api.packethost.net/memberships/E6AA9ABD-32BA-4260-A1E8-DE660E9523E5"
            }

## Membership [/memberships/{id}]
A single membership object.

### Retrieve a Membership [GET]

+ Response 200

    + Body

            {
                "href": "https://api.packethost.net/memberships/8386BB2C-F5BF-4C20-8F6A-D6EC01E59D8C",
                "id": "8386BB2C-F5BF-4C20-8F6A-D6EC01E59D8C",
                "user": {
                    "href": "https://api.packethost.net/users/0D524D8D-1AED-487C-A202-4C4FEB39D93A"
                },
                "organization": {
                    "href": "https://api.packethost.net/organizations/73C3A205-A158-42CE-B382-33D70E8B59BE"
                },
                "capacity": "Web Developer",
                "status": "pending",
                "roles": [ "admin" ],
                "created_by": {
                    "href": "https://api.packethost.net/users/2A30202D-6292-4624-B70D-1218CA9E024B"
                },
                "created_at": "2014-08-20T23:04:38Z"
            }

### Update a Membership [PATCH]

+ Request

    + Body

            {
                "status": "accepted"
            }

+ Response 204

### Delete a Membership [DELETE]
+ Response 204
