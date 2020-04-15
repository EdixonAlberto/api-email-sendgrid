import { Request, Response, NextFunction } from 'express';

const morgan = (req: Request, res: Response, next: NextFunction) => {
  const { method, url } = req;
  console.log(`** REQUEST -> ${method} ${url}`);
  // TODO: Agregar color despues
  next();
};

export default morgan;
