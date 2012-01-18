# Fetcher, An External jQuery Template Caching Plugin

Fetcher is a plugin that lets you specify external template files for jsRender, and caches them for you, returning a deferred object for later callback (or you can put a callback directly in).

Fetcher requires:

*   jQuery 1.5+
*   jsRender (https://github.com/BorisMoore/jsrender)

## UPDATE (Fetcher v2.0)

Fetcher has been updated to 2.0 since jq-tmpl.js was deprecated from jquery support. JSRender was suggested, and I've gone with it. I plan to support other templating engines later!

## Why Use Fetcher

Perhaps the largest advantage to Fetcher is being able to specify multiple template files to cache, and then receive a single deferred object that will resolve when all the templates are ready.

The second advantage to Fetcher is in it's selector parser.  With Fetcher, you could put multiple templates into a single file, and then use a selector to target individual templates in that file.

Fetcher can also automatically determine template names for you, based on either the filename, or the selector (if a selector is used).  Alternatively, you can pass your own template name.

## Code Examples

Single template caching examples...

```javascript
    // creates a template called "twitter"
    $.fetcher("twitter.html", "twitter", callback);
    
    // also creates a template called "twitter"
    $.fetcher("twitter.html", callback);
    $.fetcher("twitter.html");
    $.fetcher("twitter.html").then(callback);
    
    // also creates a template called "twitter", but from a template's selector
    $.fetcher("templates.html #twitter", callback);
    $.fetcher("templates.html .socials .twitter").then(callback);
```
    
Multiple template caching examples...

```javascript
    $.fetcher([
        ["twitter.html", function(){}],
        ["templates.html #facebook"],
        ["templates.html #rss", "feed", function(){}]
    ]).then(callback);
```
    
## Basic Documentation

Single template usage, returns Deferred object.

```javascript
    $.fetcher(url, [name], [callback]);
```
    
Multiple template usage, returns Deferred object when all are loaded.

```javascript
    $.fetcher([
        [url, [name], [callback]]
    ]);
```