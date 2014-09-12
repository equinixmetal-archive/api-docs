FORMAT: 1A
HOST: https://api.packethost.net/v1

# Packet API

This is the API for Packet. Interact with your devices, user account, and
organizations.

## Group Authentication

There are no "public" methods in the Packet API; all API methods require
authentication.

The Packet API uses API tokens for authentication. The token should be set in
an `X-Auth-Token` header for every request to the API.

    curl -H "X-Auth-Token: $api_token" https://api.packethost.net

Users may generate authentication tokens in the Packet user portal.

## Group Media Types

The Packet API returns JSON (`application/json`) or XML (`application/xml`)
depending on the value of the `Accept` header. Standard `Accept` header
parsing applies. Every API call should specify an `Accept` header if
possible.

    curl -H 'Accept: application/json' https://api.packethost.net

If your client does not support setting headers, you may also use an extension
on the end of the URL to specify the media type. For example:

    /organizations.json
    # or
    /organizations.xml

If neither an `Accept` header nor an extension is provided, JSON will be
assumed.

Requests that require data to be submitted to the API (`POST`, `PUT` and `PATCH`)
may include the data in the request body (if the `Content-Type` header is set to
`application/json`) or as form-encoded data.

	curl -H "Content-Type: application/json" -d '{"param":"value"}' https://api.packethost.net/devices
	# or
	curl -d 'param=value' https://api.packethost.net/devices

## Group Common Parameters

The Packet API uses a few methods to minimize network traffic and bandwidth:

### `fields`

For all `GET` requests in the API, you may specify a list of fields in the
resource that you'd like to fetch. For example, if you're only interested in
fetching the current user's e-mail address, you can use the following URL to
only return the data you need:

    /user?fields=email

returns

    {
        "email": "example@example.com"
    }

The `fields` parameter accepts a comma-separated list of fields.

    /user?fields=display_name,email,created_at

### `expand`

For resources that contain collections of other resources, the Packet API will
return links to the other resources by default.

    {
        ...
        "organizations": [
            { 'href': 'https://api.packethost.net/organizations/3D987365-E24A-48F9-875B-15919526AE5A' },
            { 'href': 'https://api.packethost.net/organizations/0488E769-4138-4940-9687-31D10305B685' }
        ],
        ...
    }

However, if you're interested in acting on resources in the `organizations`
collection, it doesn't make sense to make a separate API call to retrieve each
organization. Instead, you can specify which collections you'd like to be
included using the `expand` parameter.

    /user?expand=organizations

will return

    {
        ...
        "organizations": [
            {
                "href": "https://api.packethost.net/organizations/3D987365-E24A-48F9-875B-15919526AE5A",
                "id": "3D987365-E24A-48F9-875B-15919526AE5A",
                "name": "My Awesome Organization",
                ...
            },
            {
                "href": "https://api.packethost.net/organizations/0488E769-4138-4940-9687-31D10305B685",
                "id": "0488E769-4138-4940-9687-31D10305B685",
                "name": "Another Rad Organization",
                ...
            }
        ],
        ...
    }

The `expand` parameter is accepted for all `GET` requests on all resources and
collections, and should be specified as a comma-separated list.

    /user?expand=emails,organizations,memberships

`expand` may be used in conjunction with the `fields` parameter, provided that
the collection(s) you want to expand are contained in the `fields` list.

	# Good :-)
	/user?fields=display_name,organizations&expand=organizations

	# Bad :-(
	/user?fields=display_name&expand=organizations

## Group Errors

The common [HTTP Response Status Codes](http://httpstatus.es) are used. You
know the drill.
