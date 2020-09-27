import { Response } from 'express';
import sgMail from '@sendgrid/mail';

class EmailController {
  public static async sendEmail(email: TSendgrid['email'], res: Response): Promise<void> {
    // Setting token of Sendgrid
    sgMail.setApiKey(global.config.apiKey.sendgrid);

    try {
      const [result]: TSendgrid['response'] = await sgMail.send(email);
      if (global.config.modeDev) console.log('RESULT ->', result.statusCode, result.body);

      if (result.statusCode === 202) {
        res.status(200).json({
          result: {
            type: 'Successful',
            ServiceStatusCode: result.statusCode,
            message: `Email sended to ${email.to}`
          }
        });
      } else {
        res.status(400).json({
          error: {
            type: 'Email Error',
            ServiceStatusCode: result.statusCode,
            message: result.body
          }
        });
      }
    } catch (error) {
      const err: TSendgrid['error'] = error;
      console.error('ERROR-EMAIL-SEND ->', err.message);

      res.status(500).json({
        error: {
          type: 'Sendgrid Error',
          ServiceStatusCode: err.code,
          message: err.message
        }
      });
    }
  }
}

export default EmailController;
