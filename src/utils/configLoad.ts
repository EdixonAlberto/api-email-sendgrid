async function configLoad(): Promise<void> {
  if (process.env.NODE_ENV === undefined) {
    // Load enviroment variables, path default: ".env"
    const result = (await import('dotenv')).config();

    if (result.error) throw new Error(`>> CONFIG -> ${result.error}`);
  }

  const ENV: NodeJS.ProcessEnv = process.env;

  const config: TConfig = {
    port: Number(ENV.PORT) || 3000,
    serverApiKey: {
      name: 'ak',
      value: ENV.SERVER_API_KEY as string
    },
    urlAllowed: ENV.URL_ALLOWED as string,
    sendgridApiKey: ENV.SENDGRID_API_KEY as string,
    modeDev: ENV.NODE_ENV !== 'production'
  };

  global.config = config;
  console.log('>> CONFIG OK');
}

export default configLoad;
