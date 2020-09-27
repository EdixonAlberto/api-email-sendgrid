type TConfig = {
  port: number;
  headerApiKey: string;
  urlAllowedList: string;
  apiKey: {
    server: string;
    sendgrid: string;
    recaptcha: string;
  };
  modeDev: boolean;
};

type TBodyEmail = {
  to: string;
  from: string;
  subject: string;
  message: string;
};

type TRecaptchaResponse = {
  success: boolean;
  challenge_ts: string;
  hostname: string;
  'error-codes': string[];
};

type TSendgrid = {
  email: import('@sendgrid/helpers/classes/mail').MailDataRequired;
  response: [import('@sendgrid/client/src/response').ClientResponse, {}];
  error: import('@sendgrid/helpers/classes').ResponseError;
};

/************************************ DECLARATIONS **************************************/

declare namespace NodeJS {
  interface Global {
    config: TConfig;
  }
}
