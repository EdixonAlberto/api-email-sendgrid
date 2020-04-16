type TConfig = {
  port: number;
  sendgridToken: string;
  modeDev: boolean;
};

type TEmail = {
  from: string;
  to: string;
  subject: string;
  message: string;
};

type Tsendgrid = {
  // TODO: add other data later
  response: [import('@sendgrid/client/src/response').ClientResponse, {}];
  error: import('@sendgrid/helpers/classes').ResponseError;
};

/************************************ DECLARATIONS **************************************/

declare namespace NodeJS {
  interface Global {
    config: TConfig;
  }
}
