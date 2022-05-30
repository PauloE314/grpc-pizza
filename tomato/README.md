# TOMATO

Authentication and Users system.

## Setup

```bash
cp .env.example .env
yarn install
yarn build
yarn migrate
yarn start
```

## Features

- TomatoService.createUser
- TomatoService.login
- TomatoService.validateToken

For payload information, read the `src/pb/contract.proto` file that describes these calls.
