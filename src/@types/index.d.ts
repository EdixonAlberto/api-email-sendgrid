type TAttachment = import('@sendgrid/helpers/classes/attachment').AttachmentData;
type TBase64 = string;
// TODO: especificar este tipo de dato
type TMime = string;

type TConfig = {
  port: number;
  headerApiKey: string;
  urlAllowedList: string[];
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
  atts?: Array<{
    name: string;
    type: TMime;
    content: TBase64;
  }>;
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
