![](https://img.shields.io/badge/Stability-EndOfLife-black.svg)

## End of Life Statement

This repository is [End of Life](https://github.com/packethost/standards/blob/master/end-of-life-statement.md) that this software is no longer supported nor maintained by Packet or its community.

Packet API Documentation
========================

This is the source code for the Packet API documentation site.

Dependencies
------------

* `node.js`/`npm` (with `npm` in your `$PATH`): http://nodejs.org

Usage
-----

**tl;dr:** Run `npm install && grunt`

Our API docs use the [API Blueprint][1] specification. For good examples of
how to use that, see [their examples][2] or those of [Apiary][3].

[1]: http://apiblueprint.org
[2]: https://github.com/apiaryio/api-blueprint/tree/master/examples
[3]: http://apiary.io/blueprint

The Markdown files live in the `docs` directory. These are the files to edit if
you want to update the documentation itself.

To keep our docs manageable, each "section" of the API should be placed in
a new file in the `docs` directory. When the documentation site is compiled,
all of these files will be combined alphabetically (hence the `00#-` naming
scheme).

First, you'll need to install `grunt-cli` if you haven't already: `npm install
-g grunt-cli`.

To compile the documentation, run `npm install && grunt`. This will convert the
markdown files in `docs` into a static webpage in the `dist` directory, then
start a little node.js server for you to view the site. To compile without
starting the server, use `grunt compile`.

[4]: https://github.com/danielgtaylor/aglio
