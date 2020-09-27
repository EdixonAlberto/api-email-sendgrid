import express, { Application } from 'express';
/* MIDDLEWARE */
import morgan from './middleware/morgan';
import setHeader from './middleware/setHeader';
import notFound from './middleware/notFound';
import validateApiKey from './middleware/validateApiKey';
/* ROUTES */
import routes from './routes';

class Server {
  private app: Application;

  constructor() {
    this.app = express();
    this.middleware();
    this.routes();
  }

  private middleware(): void {
    global.config.modeDev ? this.app.use(morgan) : null;
    this.app.use(setHeader);
    this.app.use(validateApiKey);
    this.app.use(express.json());
  }

  private routes(): void {
    this.app.use('/api', routes);
    this.app.use(notFound);
  }

  public start(PORT = global.config.port): void {
    this.app.listen(PORT);
    console.log('>> SERVER OK');
  }
}

export default Server;
