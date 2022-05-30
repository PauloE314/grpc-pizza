# MOZZARELA

Orders system.

## Setup

```bash
cp .env.example .env
yarn install
yarn migrate
yarn start
```

## Features

- MozzarellaService.createOrder
- MozzarellaService.fetchByUser
- MozzarellaService.finishOrder

For payload information, read the `src/pb/contract.proto` file that describes these calls.
