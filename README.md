# Page Speed Image Performance Analysis Client App

This is the client app for Cloudinary image analysis tool.


## Getting Started

### Installation

**Step 1**. Make sure that you have [Node.js](https://nodejs.org/) v5 or newer and
[Yarn](https://yarnpkg.com/) installed on your development machine.

**Step 2**. Clone this repository

```shell
$ git clone git@github.com:CloudinaryLtd/pagespeed-client.git
$ cd pagespeed-client
$ yarn install                  # Install project dependencies listed in package.json
```

**Step 3**. Compile and launch your app by running:

```shell
$ CLOUDINARY_CLOUD_NAME='demo' yarn start      # Compiles the app and opens a browser with "live reload"
```

## Build

```shell
$ CLOUDINARY_CLOUD_NAME='demo' yarn run build  # Compiles the app for production
$ yarn run build:serve                         # boot up HTTP server on `3003` port and serve `build/client`
```

## Testing

**(TBD)**

To execute all unit tests, use:

```sh
$ yarn run test
```

To run unit tests continuously during development (watch tests), use:

```sh
$ yarn run test:watch
```
