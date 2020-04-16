# api-email

[![Linkedin: https://linkedin.com/in/edixonalberto](https://img.shields.io/badge/author-EdixonAlberto-purple.svg)](https://linkedin.com/in/edixonalberto)
[![MIT license](https://img.shields.io/badge/license-MIT-green.svg)](./LICENSE.md)
![GitHub](https://img.shields.io/github/followers/EdixonAlberto.svg?label=Follow&style=social)

Api to send email through of service the Sendgrid

### Starter

```sh
yarn install # install all the dependencies

# create file .env with the values they are in the template and later add the environment variables
copy template.env .env

yarn run start:dev # start in mode development
```

### Comands

```sh
yarn start:dev # mode development
yarn start:prod # mode production

yarn build # build application
yarn start # mode server
```

### Endpoints List

| Endpoint          | HTTP | Description      |
| ----------------- | ---- | ---------------- |
| `/api`            | GET  | Check api status |
| `/api/send_email` | POST | Send a email     |

<!-- ### Screenshots

![image](./docs/template.png) -->
