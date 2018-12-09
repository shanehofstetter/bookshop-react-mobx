# Bookshop

## Features

* Rails API
    * (TODO) add devise
* React App
    * Bootstrap 4 components ([reactstrap](https://reactstrap.github.io))
    * list and add books
        * books get fetched from rails api ([axios](https://github.com/axios/axios))
        * bootstrap form inputs with error rendering ([informed](https://joepuzzo.github.io/informed/) + custom)
    * I18n support (translations loaded from rails api) ([i18next](https://github.com/i18next/react-i18next))
    * Websocket/Actioncable example included ([react-actioncable-provider](https://github.com/cpunion/react-actioncable-provider))
    * Mobx
    * devise token authentication
    * login/logout

## Setup

Install the libraries:
```bash
$ bundle install
$ yarn install
```

Setup database:
```
$ rails db:setup
```

## Run

```
npm run serve
```

This starts the rails server plus the webpack dev server (with hot reload).
Meaning react app will get compiled automatically on save and browser will hot-reload it.

