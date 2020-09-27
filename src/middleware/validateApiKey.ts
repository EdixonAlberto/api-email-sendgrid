import { Request, Response, NextFunction } from 'express';

const validateApiKey = (req: Request, res: Response, next: NextFunction): void => {
  if (req.method === 'OPTIONS') next();
  else {
    const HEADER_API_KEY: string = global.config.headerApiKey;
    const API_KEY: string = global.config.apiKey.server;

    const apiKey = req.header(HEADER_API_KEY) as string;

    switch (apiKey) {
      case API_KEY:
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
