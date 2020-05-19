import { Request, Response, NextFunction } from 'express';

const validateApiKey = (req: Request, res: Response, next: NextFunction): void => {
  // TODO: mejorar la captura del method OPTIONS debido al config de CORS
  if (req.method === 'OPTIONS') next();
  else {
    const API_KEY_NAME: string = global.config.serverApiKey.name;
    const API_KEY_VALUE: string = global.config.serverApiKey.value;

    const apiKey = req.header(API_KEY_NAME) as string;

    switch (apiKey) {
      case API_KEY_VALUE:
        next();
        break;

      case undefined:
        res.status(401).json({
          error: {
            type: 'Autentication Error',
            message: 'Missing Api Key'
          }
        });
        break;

      default:
        res.status(401).json({
          error: {
            type: 'Autentication Error',
            message: 'Invalid Api Key'
          }
        });
    }
  }
};

export default validateApiKey;
