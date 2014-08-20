# Group Users
Manage your user account.

## Current User [/user]
The currently logged-in user.

### Retrieve the Current User [GET]
Returns the user object for the currently logged-in user.

+ Response 200

    + Body

            {
                "id": "333F576A-1F5F-4983-BAF1-89B0869FE704",
                "email": "example@example.com",
                "name": "Melissa Smith",
                "organizations": [
                    { 'href': 'https://api.packethost.net/organizations/3D987365-E24A-48F9-875B-15919526AE5A' },
                    { 'href': 'https://api.packethost.net/organizations/0488E769-4138-4940-9687-31D10305B685' }
                ],
                "memberships": [
                    { 'href': 'https://api.packethost.net/memberships/3BE09DC2-5030-440B-B81A-AF7097B86F16' },
                    { 'href': 'https://api.packethost.net/memberships/B2403E40-9329-436B-B782-591885451ABE' }
                ],
                "created_at": "2014-04-14T02:15:15Z",
            }

### Update the Current User [PATCH]
Updates the currently logged-in user.

+ Response 204
