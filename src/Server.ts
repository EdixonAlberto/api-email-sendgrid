import express, { Application } from 'express';

/* ROUTES */
import routes from './routes';

/* MIDDLEWARE */
import morgan from './middleware/morgan';
import setHeader from './middleware/setHeader';
import notFound from './middleware/notFound';
import validateApiKey from './middleware/validateApiKey';

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
    this.app.use('/api', routes); // TODO: definir el endpoint frontal mas adelante
    this.app.use(notFound);
  }

  public start(PORT = global.config.port): void {
    this.app.listen(PORT);
    console.log('>> SERVER OK -> on port:', PORT);
  }
}

export default Server;
