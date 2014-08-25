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

    + Body

            {
                "events": [
                    { "href": "https://api.packethost.net/events/ED55EFBD-051A-4872-A920-A89C317E87FE" },
                    ...
                ]
            }

## Event [/events/{id}]
A single event object.

+ Parameters
    + id (string) ... The event ID (in the form of a UUID).

### Retrieve an Event [GET]

+ Response 200

    + Body

            {
                "id": "F63176A7-C88C-4026-848F-38F196FBA850",
                "message": {
                    "raw": "%actor% created a new device %device%",
                    "formatted": "Kevin R. created a new device \"DB 2\""
                },
                "type": "device:created",
                "created_at": "2014-08-25T21:40:40Z",
                "relationships": {
                    "actor": {
                        "href": "https://api.packethost.net/users/8967F2AC-C3AC-4BF3-8405-219043325A70"
                    },
                    "device": {
                        "href": "https://api.packethost.net/devices/93FD35D9-9CBC-46C4-8E2B-B7897496AC8B"
                    }
                }
            }
