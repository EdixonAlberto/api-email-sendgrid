import { Request, Response, NextFunction } from 'express';

const setHeader = (req: Request, res: Response, next: NextFunction) => {
  const allow = '';

  res.header('Access-Contro-Allow-Origin', allow); // TODO: Pensar mejor esto;

  res.header('Access-Control-Allow-Headers', [
    'Access-Contro-Allow-Origin',
    'Content-Type'
    // TODO: Agregar mas...
  ]);

  // res.header('Content-Type', 'application/json')

  next();
};

export default setHeader;
