import crypto from 'crypto';

function createToken(): void {
  const time = new Date().getTime();
  const key = time.toString();

  const token: string = crypto.createHmac('sha256', key).digest('hex');
  console.log('Token: ', token);
}

createToken();
