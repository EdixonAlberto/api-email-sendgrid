import { Router, Request, Response } from 'express';
import sgMail from '@sendgrid/mail';

const route = Router();

/**
 *  Route to check api status
 * */
route.get('/', (req: Request, res: Response): void => {
  res.status(200);
  res.json({
    api: 'Email Sendgrid',
    version: process.env.npm_package_version,
    serverTime: new Date().getTime()
  });
});

/**
 *  Route to send email
 * */
route.post(
  '/send_email',
  async (req: Request, res: Response): Promise<void> => {
    const data = req.body as TEmail;

    // Validate input data
    if (data.to && data.from && data.subject && data.message) {
      const email = {
        to: data.to,
        from: data.from,
        subject: data.subject,
        text: data.message
      };

      // Setting token of Sendgrid
      sgMail.setApiKey(global.config.sendgridToken);

      try {
        const [result]: Tsendgrid['response'] = await sgMail.send(email);
        if (global.config.modeDev) console.log(result.statusCode, result.body);

        if (result.statusCode === 202) {
          res.status(200);
          res.json({
            result: {
              type: 'Successful',
              ServiceStatusCode: result.statusCode,
              message: `Email sended to ${data.to}`
            }
          });
        } else {
          res.status(400);
          res.json({
            error: {
              type: 'Email Error',
              ServiceStatusCode: result.statusCode,
              message: result.body
            }
          });
        }
      } catch (error) {
        const err: Tsendgrid['error'] = error;

        res.status(500);
        res.json({
          error: {
            type: 'Sendgrid Error',
            ServiceStatusCode: err.code,
            message: err.message,
            description: err.response?.body || ''
          }
        });
      }
    } else {
      if (global.config.modeDev) console.log(data);

      res.status(400);
      res.json({
        error: {
          type: 'Email Error',
          ServiceStatusCode: 0,
          message: 'Json with incorrect data'
        }
      });
    }
  }
);

export default route;
