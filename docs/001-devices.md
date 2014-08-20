# Group Devices
Devices are the heart of the Packet ecosystem.

## Devices [/devices]
A collection of devices that the current user can access.

### Retrieve all Devices [GET]
Returns a list of the current user's devices.

+ Response 200

### Create a Device [POST]
Creates a new device and provisions it in our datacenter.

+ Response 201

## Device [/devices/{id}]
A single device object.

A device has the following properties:

- id
- type
- organization
- created_at
- updated_at

+ Parameters
  + id (string) ... The device ID (in the form of a UUID).

### Retrieve a Device [GET]
+ Response 200

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
