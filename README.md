# api-email-sendgrid

[![Linkedin: https://linkedin.com/in/edixonalberto](https://img.shields.io/badge/author-EdixonAlberto-purple.svg)](https://linkedin.com/in/edixonalberto)
[![MIT license](https://img.shields.io/badge/license-MIT-green.svg)](./LICENSE.md)
![GitHub](https://img.shields.io/github/followers/EdixonAlberto.svg?label=Follow&style=social)

Api to send email through of service the Sendgrid

![api-email-sendgrid](./.github/image.png)

### Starter

Install all the dependencies.

```sh
npm install
```

Create file `.env` with the keys they are in the template.

```sh
copy template.env .env
```

Add the environment variables.

- create a **SENDGRID_API_KEY** logging into your
  [sendgrid account](https://app.sendgrid.com/) &#x279c;

- create a **SERVER_API_KEY** executing the command `create-apikey`.

```sh
npm run create-apikey
```

Start api in mode development.

```sh
npm run start:dev
```

### Main Commands

```sh
npm start:dev # mode development
npm start:prod # mode production

npm build # build application
npm start # mode server
```

### Endpoints List

| Endpoint          | HTTP | Description      |
| ----------------- | ---- | ---------------- |
| `/api`            | GET  | Check api status |
| `/api/send_email` | POST | Send a email     |

### Request Example

![request-example](./.github/example.png)
