import { Request, Response, NextFunction } from 'express';

const setHeader = (req: Request, res: Response, next: NextFunction): void => {
  const ORIGINS: string = global.config.urlAllowedList;
  const HEADER_API_KEY: string = global.config.headerApiKey;

  ORIGINS.split(',').map((origin) => {
    const originIn = req.header('origin') as string;
    if (origin === originIn) res.header('Access-Control-Allow-Origin', origin);
  });

  res.header('Access-Control-Allow-Methods', ['OPTIONS', 'POST']);
  res.header('Access-Control-Allow-Headers', ['Content-Type', HEADER_API_KEY]);
  res.header('Accept', 'application/json');
  res.header('Content-Type', 'application/json');

  next();
};

export default setHeader;
