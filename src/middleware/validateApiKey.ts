import { Request, Response, NextFunction } from 'express';

const validateApiKey = (req: Request, res: Response, next: NextFunction): void => {
  const KEY_NAME: string = global.config.serverApiKey.name;
  const KEY_VALUE: string = global.config.serverApiKey.value;

  const apiKeyHeader = req.header(KEY_NAME) as string;
  const apiKey = apiKeyHeader.toLocaleLowerCase();
  console.log(apiKey);

  // switch (apiKey) {
  //   case KEY_VALUE:
  //     break;

  //   default:

  // }

  // if (apiKeyHeader === VALUE_API_KEY) {
  next();
  // } else {
  // }
};

export default validateApiKey;
