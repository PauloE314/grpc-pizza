# Pizza

API Gateway that exposes the system features.

## Setup

```bash
cp .env.example .env
yarn install
yarn start
```

## Routes

- `POST - /users`

  - body:
    - name: `string`
    - password: `string`

- `GET - /users/orders`

  - headers:
    - Authorization: `string`

- `POST - /auth/login`

  - body:
    - name: `string`
    - password: `string`

- `POST - /orders`

  - body:
    - name: `string`
    - description: `string`
    - price: `number`, in cents

- `PUT - /orders/:id/finish`

  - headers:
    - Authorization: `string`
