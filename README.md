# GitHub GraphQL Client tools

## Overview

This simple webserver collection allows the exploration of GitHub GraphQL environemnt, with both a [GraphiQL client](https://github.com/graphql/graphiql) and [GraphQL Voyager](https://github.com/APIs-guru/graphql-voyager).

## Setup

The setup is simple. Follow these three steps:

1. Clone the repo and install dependencies with `npm ci`
2. Prepare a `.env` file which must contain GitHub GraphQL Api endpoint and the token for access
3. Run the server with `npm run serve`

## .env File

The format of the .env file is the following:

```bash
API_URL=
API_TOKEN= 
```

The `API_URL` requires the GitHub URL. The public url is `https://api.github.com/graphql` and a similar format exists for GitHub enterprise. 
The `API_TOKEN` is the bearer token for GitHub. To create a GitHub token, please follow the [official documentation](https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token) and give the token all the permissions for the `repo` scope.

## Caveats and limitations

GitHub applies a rate limit policy, so the lack of authentication token would make the suite unsuable. Moreover, because GitHub schema is quite extensive, Voyager can take a bit (up to 120 seconds) to render the entire schema and the final navigation might not the most responsive. Untortunately, this is due to Voyager code.

The upside of this application is that it can works with any GraphQL provider where the following features are available:

- Introspection enabled
- Authorization via bearer token

## Todo

- [] Wrap both component into a single page
- [] Add a webform for collecting the 
- [] Add [GraphiQL Explorer](https://github.com/OneGraph/graphiql-explorer) to the list of clients
