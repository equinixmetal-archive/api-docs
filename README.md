Packet API Documentation
========================

This is the source code for the Packet API documentation site.

Dependencies
------------

* `node.js`/`npm` (with `npm` in your `$PATH`): http://nodejs.org

Usage
-----

**tl;dr:** Run `bin/compile`

Our API docs use the [API Blueprint][1] specification. For a good example of
how to use that, see [their examples][2].

The Markdown files live in the `docs` directory. These are the files to edit if
you want to update the documentation itself.

To keep our docs manageable, each "section" of the API should be placed in
a new file in the `docs` directory. When the documentation site is compiled,
all of these files will be combined alphabetically (hence the `00#-` naming
scheme).

To compile the documentation, run the `bin/compile` script included in this
repo. The script will make sure dependencies are installed, combine all of the
files in the `docs` directory, then use the [aglio][3] to convert the docs into
a pretty static website in the `web` directory. You'll need to set up a
webserver to properly view the generated site, with the docroot set to the
`web` directory (Apache works fine for this).

[1]: http://apiblueprint.org
[2]: https://github.com/apiaryio/api-blueprint/tree/master/examples
[3]: https://github.com/danielgtaylor/aglio
