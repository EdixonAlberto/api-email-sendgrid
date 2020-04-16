import { Request, Response, NextFunction } from 'express';

const setHeader = (req: Request, res: Response, next: NextFunction): void => {
  const origin: string = global.config.urlAllowed;

  // Input
  res.header('Access-Control-Allow-Origin', origin);
  res.header('Access-Control-Allow-Headers', [
    'Access-Control-Allow-Origin',
    'Content-Type'
    // TODO: Agregar mas...
  ]);

  // Output
  res.header('Content-Type', 'application/json');

  next();
};

export default setHeader;
