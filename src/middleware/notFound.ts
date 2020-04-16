import { Request, Response } from 'express';

const notFound = (req: Request, res: Response): void => {
  res.status(404);
  res.json({
    error: {
      type: 'RouteError',
      message: `Route '${req.originalUrl}' not found`
    }
  });
};
export default notFound;
