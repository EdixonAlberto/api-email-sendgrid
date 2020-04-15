import { Request, Response, NextFunction } from 'express';

const notFound = (req: Request, res: Response) => {
  res.status(404);
  res.json({
    error: {
      type: 'RouteError',
      message: `Route '${req.originalUrl}' not found`
    }
  });
};
export default notFound;
