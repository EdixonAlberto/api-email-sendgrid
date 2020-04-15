async function configLoad(): Promise<void> {
  if (process.env.NODE_ENV === undefined) {
    const result = (await import('dotenv')).config(); // Load enviroment variables, path default: ".env"

    if (result.error) throw new Error(`>> CONFIG -> ${result.error}`);
  }

  const ENV: NodeJS.ProcessEnv = process.env;

  const config: TConfig = {
    port: Number(ENV.PORT) || 3000,
    sendgridToken: ENV.SENDGRID_API_TOKEN || '',
    modeDev: ENV.NODE_ENV !== 'production'
  };

  global.config = config;
  console.log('>> CONFIG OK');
}

export default configLoad;
