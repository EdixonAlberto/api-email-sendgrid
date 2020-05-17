import { Request, Response, NextFunction } from 'express';

const setHeader = (req: Request, res: Response, next: NextFunction): void => {
  const ORIGIN: string = global.config.urlAllowed;
  const HEADER_API_KEY: string = global.config.serverApiKey.name;

  // Input
  res.header('Access-Control-Allow-Origin', ORIGIN);
  res.header('Accept', 'application/json');
  res.header('Access-Control-Allow-Headers', [
    'Access-Control-Allow-Origin',
    'Content-Type',
    HEADER_API_KEY
    // TODO: Agregar mas...
  ]);

  // Output
  res.header('Content-Type', 'application/json');

  next();
};

export default setHeader;
