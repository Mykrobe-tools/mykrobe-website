# Mykrobe website

Note this is currently configured for deploy to Heroku; it creates a build on precommit and uses `npm` to negate installing private dependencies on deploy.

## Install

First, clone the repo then install dependencies.

```
$ npm install
```

## Setup environment variables

Copy the template env file

```
$ cp .env.example .env
```

## Run development version

This will launch a local dev server and instance of the app. This provides hot (live) reloading of modified files.

```
$ npm run web-dev
```

Visit [http://localhost:3000/](http://localhost:3000/)

## Deploy current branch to Heroku

```
$ git push heroku +HEAD:master
```
