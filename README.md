# Api Email Sendgrid

[![Linkedin: https://linkedin.com/in/edixonalberto](https://img.shields.io/badge/author-EdixonAlberto-purple.svg)](https://linkedin.com/in/edixonalberto)
[![MIT license](https://img.shields.io/badge/license-MIT-green.svg)](./LICENSE.md)
![GitHub](https://img.shields.io/github/followers/EdixonAlberto.svg?label=Follow&style=social)

Api to send email through of service the Sendgrid

![api-email-sendgrid](./.github/image.png)

## Starter

Install all the dependencies.

```sh
yarn install
```

Create file `.env` with the keys they are in the template.

```sh
copy template.env .env
```

Add the environment variables.

- create a **SERVER_API_KEY** executing the command

```sh
yarn create-apikey
```

- create a **SENDGRID_API_KEY** logging into your
  [sendgrid account](https://app.sendgrid.com/), which must have the following format:
  `SG.aaaaaaaaaaaaaa.bbbbbbbbbbbbbbbbbbbbbbbb`

- create a **RECAPTCHA_API_KEY** using google service
  [Recaptcha](https://developers.google.com/recaptcha/docs/v3).

Start api in mode development.

```sh
yarn dev
```

## Commands List

```sh
yarn lint # linting to files .ts with Prettier
yarn create-apikey # create api key
yarn dev # run api in mode development
yarn prod # run api in mode production
```

## Command to Deploy in Server

```sh
yarn build # build api
yarn start # run api builded
```

## Endpoints List

| Endpoint                | HTTP | Description                 | Status      |
| ----------------------- | ---- | --------------------------- | ----------- |
| `/api`                  | GET  | Send a email from interface | IN PROGRESS |
| `/status`               | GET  | Check api status            | OK          |
| `/api/recaptcha_verify` | POST | Verify captcha of Google    | OK          |
| `/api/send_email`       | POST | Send a email                | OK          |

## Request Example

![request-example](./.github/example.png)
