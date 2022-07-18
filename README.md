# Accessibility statement generator


## Embedding in Wordpress

As well as running as standalone HTML, it is possible to embed the program in a Wordpress site if wished.

A suggested method is:

 * Git clone the repo to anywhere on your system, even outside the webtree if wished, e.g. at `/path/to/accessibility-statement-generator`
 * Install a plugin which provides an include shortcode, e.g. Include Me
 * Create a normal page, e.g. at `/resources/access-statements/` or wherever you want in your site
 * Add the shortcode to the page, e.g. `[includeme file=/path/to/accessibility-statement-generator/index.html]`
 * Add an Alias to httpd.conf (NB not possible in .htaccess) so that the JS/CSS assets are visible to the web tree at the same location as the page, e.g. `AliasMatch /resources/access-statements/(.+)(.js|.css)$ /path/to/accessibility-statement-generator/$1$2`
