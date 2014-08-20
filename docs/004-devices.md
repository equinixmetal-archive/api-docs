# Group Devices
Devices are the heart of the Packet ecosystem.

## Devices [/devices]
A collection of devices that the current user can access.

### Retrieve all Devices [GET]
Returns a list of the current user's devices.

+ Response 200

### Create and Provision a Devices [POST]
Creates a new device.

+ Response 201

## Device [/devices/{id}]
A single device object.

A device has the following properties:

- id
- organization
- created_at
- updated_at

+ Parameters
  + id (string) ... The device ID (in the form of a UUID).

### Retrieve a Device [GET]
+ Response 200

### Update a Device [PATCH]
+ Response 204

### Delete and de-provision a Device [DELETE]
+ Response 204
