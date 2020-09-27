import Server from './Server';
import configLoad from './utils/configLoad';

async function main() {
  try {
    await configLoad();

    const server = new Server();
    server.start();
  } catch (error) {
    console.error('ERROR-SERVER ->', error.message);
  }
}

main();
