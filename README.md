# Mykrobe website

Note this is currently configured for deploy to Heroku; it creates a build on precommit and uses `npm` to negate installing private dependencies on deploy.

## Install

First, clone the repo then install dependencies.

```
$ yarn
```

## Setup environment variables

Copy the template env file

```
$ cp .env.example .env
```

## Run development version

This will launch a local dev server and instance of the app. This provides hot (live) reloading of modified files.

```
$ yarn web-dev
```

Visit [localhost:3000](http://localhost:3000/)

## Deploy

```
$ yarn web-build
```

This will create the build inside the `build` folder.

Web server is hosted on Dreamhost, simply transfer via sftp. This is a php/Apache server with `.htaccess` set to serve a single static page.

* Server `rockdale.dreamhost.com`
* Username `makeandship`
* Key `mykrobe-website-sftp` from the usual location

Example usage:

```
$ ssh makeandship@rockdale.dreamhost.com
```

The website is deployed in the `mykrobe.com` folder

Visit [www.mykrobe.com](https://www.mykrobe.com/)