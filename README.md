# REST API NodeJS

## Execution instructions

### Installation prerequisites
- [Docker](https://www.docker.com/get-started) must be installed, and the
  current user must have privileges to create images and create and run
  containers.
- The latest LTS version of [NodeJS](https://nodejs.org/es/) must be installed
- NodeJS package [yarn](https://yarnpkg.com/) must be installed.

### Setting up server and database
To create a database server instance for the server, we need to craft a
customized MongoDB container executing:

```
yarn db:create
```

Once the database container is in place, to start the server, execute:

```
yarn db:start
yarn build
yarn start
```
To shut down the database server, execute:

```
yarn db:stop
```

## Server tests
To execute all unit tests, execute:

```
yarn test
```

To generate a test coverage report, execute:

```
yarn coverage
```

### API documentation

Implementation of a REST API with basic CRUD operations:

- `GET /api/v1/phones`: Get a list of all phones.
- `GET /api/v1/phones/:page`: Get a phone paginated list of page `page`.
- `POST /api/v1/phones`: Create a new phone entry.
- `PUT /api/v1/phones/:id`: Modify the phone entry with id `id`
- `DELETE /api/v1/phones/:id`: Delete the phone entry with id `id`.

### Relevant technologies used
- NodeJS & typescript.
- Docker & MongoDB.
- Linting through tsc.
- Code formatting through Prettier.
- Unit testing and code coverage through Jest.
- Pagination state could be defined through query parameter.
