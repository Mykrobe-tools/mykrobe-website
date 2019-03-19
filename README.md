Mykrobe website
===============

# v1.0

2019-03-19 - Downloaded content and backed up database to `backups/2019-03-19 mykrobe_wordpress.sql`

# Deploy

#### Push database ####

Pushes content changes to production
~~~~
grunt push_db --target=production
~~~~


#### Push files ####

Build theme then push WordPress + theme changes to production
~~~~
grunt build
grunt push_files --target=production
~~~~

#### Pull database ####

Pulls database from production and imports into local machine
~~~~
grunt pull_db --target=production
~~~~

