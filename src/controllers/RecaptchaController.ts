import { Response } from 'express';
import axios from 'axios';

class RecaptchaController {
  public static async verify(response: string, res: Response): Promise<void> {
    try {
      const { status, data } = await axios.post<TRecaptchaResponse>(
        'https://www.google.com/recaptcha/api/siteverify',
        null,
        {
          params: {
            secret: global.config.apiKey.recaptcha,
            response
          }
        }
      );

      if (status === 200) {
        if (data.success) {
          res.status(200).json({
            type: 'Successful',
            message: `Verifed: ${new Date(data.challenge_ts).toISOString()}`
          });
        } else {
          res.status(400).json({
            error: {
              type: 'Verification Error',
              errors: data['error-codes']
            }
          });
        }
      } else {
        res.status(status).json({
          error: {
            type: 'Verification Error',
            errors: data['error-codes']
          }
        });
      }
    } catch (error) {
      console.error('ERROR-RECAPTCHA_VERIFY ->', error.message);

      res.status(500).json({
        error: {
          type: 'Recaptcha Error',
          message: error.message
        }
      });
    }
  }
}

export default RecaptchaController;
