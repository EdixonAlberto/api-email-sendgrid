import express, { Application } from 'express';
// import exphbs from 'express-handlebars';
// import { join } from 'path';

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
    this.app.use(express.urlencoded({ limit: '50mb', extended: true }));
    global.config.modeDev ? this.app.use(morgan) : null;
    this.app.use(setHeader);
    this.app.use(validateApiKey);
    this.app.use(express.json());

    // TODO: publicar layout
    // this.app.set('views', resolve('src', 'views'));
    // this.app.engine(
    //   '.hbs',
    //   exphbs({
    //     defaultLayout: 'main',
    //     partialsDir: resolve(this.app.get('views'), 'partials'),
    //     layoutsDir: resolve(this.app.get('views'), 'layouts'),
    //     extname: '.hbs'
    //   })
    // );
    // this.app.set('view engine', '.hbs');
    // this.app.use(express.static(join(__dirname, 'public')));
  }

  private routes(): void {
    this.app.use('/api', routes);
    this.app.use(notFound);
  }

  public start(PORT = global.config.port): void {
    this.app.listen(PORT);

    console.log(
      '>> SERVER OK',
      global.config.modeDev ? `-> http://localhost:${PORT}` : ''
    );
  }
}

export default Server;
