# Group Devices
Devices are the heart of the Packet ecosystem.

## Devices [/devices]
A collection of devices that the current user can access.

### Retrieve all Devices [GET]
Returns a list of the current user's devices.

+ Response 200

    + Body

            {
                "devices": [
                    { "href": "https://api.packethost.net/devices/7AF858CC-C4B2-465D-8DB4-D9B8F589CDD6" },
                    { "href": "https://api.packethost.net/devices/742264CF-EA1F-4C9A-BC29-296BF60736F1" },
                    ...
                ]
            }

### Create a Device [POST]
Creates a new device and provisions it in our datacenter.

Type-specific options (such as `datacenter` for `baremetal` devices) should be
included in the main data structure alongside `type` and `subtype`.

+ Request

    + Body

            {
                "type": "baremetal",
                "subtype": "diablo",
                "datacenter": "nyc",
                "os": "ubuntu"
            }

+ Response 201

    + Headers

            Location: https://api.packethost.net/devices/C3738E95-74A3-4C50-B93F-BEBAB47C10E0 rel="self"

    + Body

            {
                "href": "https://api.packethost.net/devices/C3738E95-74A3-4C50-B93F-BEBAB47C10E0"
            }


## Device [/devices/{id}]
A single device object.

+ Parameters
  + id (string) ... The device ID (in the form of a UUID).

+ Model

        {
            "id": "33B35961-6225-417E-828A-5E56C1A22BE1",
            "type": "baremetal",
            "subtype": "diablo",
            "status": "active",
            "datacenter": "nyc",
            "organization": {
                "href": "https://api.packethost.net/organizations/6D148728-A60F-4789-85E7-7ADE00A73E26"
            },
            "created_at": "2014-04-14T02:15:15Z",
            "created_by": {
                "href": "https://api.packethost.net/users/861C7006-19B7-4EE2-A161-D08AD7CE26D8"
            }
        }

### Retrieve a Device [GET]
Type-specific options (such as `datacenter` for `baremetal` devices) will be
included as part of the main data structure.

+ Response 200

    [Device][]

### Update a Device [PATCH]
+ Response 204

### Delete a Device [DELETE]
Deletes a device and de-provisions it in our datacenter.

+ Response 204

## Actions [/devices/{id}/actions]
A collection of actions for a given device.

+ Parameters
  + id (string) ... The device ID to retrieve actions for.

### Retrieve all Actions [GET]
Returns a list of all actions for the given device.

+ Response 200

### Create an Action [POST]
Creates an action for the given device. Possible actions include:

- power-off
- reboot

+ Response 201

## Action [/actions/{id}]
A single action object.

An action has the following parameters:

- type
- status
- device
- created_by
- created_at

+ Parameters
  + id (string) ... The action ID.

### Retrieve an Action [GET]
Returns a single action object.

+ Response 200
