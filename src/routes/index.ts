import { Router, Request, Response } from 'express';
import sgMail from '@sendgrid/mail';

const route = Router();

route.get('/', (req: Request, res: Response): void => {
  res.status(200);
  res.json({ message: 'In Construction...' });
});

route.post(
  '/sendEmail',
  async (req: Request, res: Response): Promise<void> => {
    // TODO: Implementar SENDGRID

    const data = req.body as TEmail;

    sgMail.setApiKey(global.config.sendgridToken);

    const email = {
      to: data.to,
      from: data.from,
      subject: data.subject,
      text: data.message
    };

    try {
      const [result]: Tsendgrid['response'] = await sgMail.send(email);
      if (global.config.modeDev) console.log(result.statusCode, result.body);

      if (result.statusCode === 202) {
        res.status(200);
        res.json({
          result: {
            status: 200,
            message: `Email sended to ${data.to}`
          }
        });
      } else {
        res.json({
          error: {
            type: 'ErrorEmail',
            status: result.statusCode,
            message: result.body
          }
        });
      }
    } catch (error) {
      console.error(error.message);
    }
  }
);

export default route;
