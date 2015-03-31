Mykrobe website
===============

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

