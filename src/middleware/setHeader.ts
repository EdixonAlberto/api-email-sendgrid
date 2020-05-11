import { Request, Response, NextFunction } from 'express';

const setHeader = (req: Request, res: Response, next: NextFunction): void => {
  const ORIGIN: string = global.config.urlAllowed;
  const API_KEY_HEADER: string = global.config.serverApiKey.name;

  // Input
  res.header('Access-Control-Allow-Origin', ORIGIN);
  res.header('Access-Control-Allow-Headers', [
    'Access-Control-Allow-Origin',
    'Content-Type',
    API_KEY_HEADER
    // TODO: Agregar mas...
  ]);

  // Output
  res.header('Content-Type', 'application/json');

  next();
};

export default setHeader;
