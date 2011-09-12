# Fetcher, An External jQuery Template Caching Plugin

Fetcher is a plugin that lets you specify external template files for jQuery-tmpl, and caches them for you, returning a deferred object for later callback (or you can put a callback directly in).

Fetcher requires:
- jQuery 1.5+
- jQuery Tmpl Plugin

## Why Use Fetcher

Perhaps the largest advantage to Fetcher is being able to specify multiple template files to cache, and then receive a single deferred object that will resolve when all the templates are ready.

The second advantage to Fetcher is in it's selector parser.  With Fetcher, you could put multiple templates into a single file, and then use a selector to target individual templates in that file.

Fetcher can also automatically determine template names for you, based on either the filename, or the selector (if a selector is used).  Alternatively, you can pass your own template name.

