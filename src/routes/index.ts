import { Router, Request, Response } from 'express';
import EmailController from '../controllers/EmailController';
import RecaptchaController from '../controllers/RecaptchaController';
import { endpoints } from '@ENUM';

const ERROR_MESSAGE: string = 'Missing or incorrect data';

const route = Router();

/**
 * Route to use api from an interface
 */
// route.get(endpoints.API, (req: Request, res: Response): void => {
//   res.render('index');
// });

/**
 *  Route to check api status
 * */
route.get(endpoints.STATUS, (req: Request, res: Response): void => {
  res.status(200).json({
    api: 'Email Sendgrid',
    version: process.env.npm_package_version,
    serverTime: new Date().toUTCString().toLocaleUpperCase()
  });
});

/**
 *  Route to send email
 * */
route.post(
  endpoints.SEND_EMAIL,
  async (req: Request, res: Response): Promise<void> => {
    const body = req.body as TBodyEmail;

    // Validate input email
    if (body.to && body.from && body.subject && body.message) {
      const email: TSendgrid['email'] = {
        to: body.to,
        from: body.from,
        subject: body.subject,
        text: body.message
      };

      if (body.atts?.length) {
        email.attachments = body.atts.map(att => ({
          content: att.content,
          filename: att.name,
          type: att.type,
          disposition: 'attachment'
        }));
      }

      EmailController.sendEmail(email, res);
    } else {
      if (global.config.modeDev) console.log(body);

      res.status(400).json({
        error: {
          type: 'Email Error',
          message: ERROR_MESSAGE
        }
      });
    }
  }
);

/**
 *  Route to verify recaptcha
 *  */
route.post(
  endpoints.RECAPTCHA_VERIFY,
  async (req: Request, res: Response): Promise<void> => {
    const response = req.body.response as string;

    if (response) {
      RecaptchaController.verify(response, res);
    } else {
      if (global.config.modeDev) console.log(response);

      res.status(400).json({
        error: {
          type: 'token empty',
          message: ERROR_MESSAGE
        }
      });
    }
  }
);

export default route;
