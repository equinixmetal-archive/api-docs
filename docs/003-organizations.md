# Group Organizations
Manage your organizations and their members.

## Organizations [/organizations]
A collection of organizations that the current user belongs to.

### Retrieve all Organizations [GET]
Returns a list of all organizations that the current user belongs to.

+ Response 200

    + Body

            {
                "organizations": [
                    { "href": "https://api.packethost.net/organizations/91E1F149-6FBA-4E2F-B5EE-294759BC80EA" },
                    { "href": "https://api.packethost.net/organizations/91360362-16E3-4EA2-B5B5-923FA310418B" }
                ]
            }

### Create an Organization [POST]
Creates a new organization. The current user will automatically be added as the
organization owner.

+ Request

    + Body

            {
                "name": "Samantha's Widget Company",
                "website": "http://samswidgets.com"
            }

+ Response 201

    + Headers

            Location: https://api.packethost.net/organizations/6A17CC17-611A-4F12-B0C3-4B3CAF6599AD

    + Body

            {
                "href": "https://api.packethost.net/organizations/6A17CC17-611A-4F12-B0C3-4B3CAF6599AD"
            }

## Organization [/organizations/{id}]
A single organization object. An organization is a collection of users that can
be associated with devices, tickets, and other things.

+ Parameters
    + id (string) ... The organization ID (in the form of a UUID).

### Retrieve an Organization [GET]

+ Response 200

    + Body

            {
                "id": "E16368A9-1ECD-4397-A60A-5355CA63BEDA",
                "owner": {
                    "href": "https://api.packethost.net/users/641CA531-1900-461B-AF88-B01750648705"
                },
                "name": "Acme & Co",
                "website": "http://acmeco.com",
                "members": [
                    { "href": "https://api.packethost.net/users/3D987365-E24A-48F9-875B-15919526AE5A" },
                    { "href": "https://api.packethost.net/users/0488E769-4138-4940-9687-31D10305B685" }
                ],
                "memberships": [
                    { "href": "https://api.packethost.net/memberships/3BE09DC2-5030-440B-B81A-AF7097B86F16" },
                    { "href": "https://api.packethost.net/memberships/B2403E40-9329-436B-B782-591885451ABE" }
                ]
            }

### Update an Organization [PATCH]

+ Response 204

    + Headers

            Location: https://api.packethost.net/organizations/E16368A9-1ECD-4397-A60A-5355CA63BEDA

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
                ]
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

    + Headers

            Location: https://api.packethost.net/memberships/EB10ED3C-6A63-454E-A227-0347ABA171EE

### Delete a Membership [DELETE]
+ Response 204
