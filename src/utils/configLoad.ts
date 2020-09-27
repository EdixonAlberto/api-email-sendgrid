async function configLoad(): Promise<void> {
  if (process.env.NODE_ENV === undefined) {
    // Load enviroment variables, path default: ".env"
    const result = (await import('dotenv')).config();

    if (result.error) throw new Error(`ERROR-CONFIG -> ${result.error}`);
  }

  const ENV: NodeJS.ProcessEnv = process.env;

  const config: TConfig = {
    port: Number(ENV.PORT) || 3000,
    headerApiKey: 'ak',
    urlAllowedList: ENV.URL_ALLOWED_LIST as string,
    apiKey: {
      server: ENV.SERVER_API_KEY as string,
      sendgrid: ENV.SENDGRID_API_KEY as string,
      recaptcha: ENV.RECAPTCHA_API_KEY as string
    },
    modeDev: ENV.NODE_ENV !== 'production'
  };

  global.config = config;
  console.log('>> CONFIG OK');
}

export default configLoad;
