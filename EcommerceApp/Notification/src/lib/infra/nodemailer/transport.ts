import vars from '$/vars';
import { Transporter, createTransport } from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';

export let transporter: Transporter<SMTPTransport.SentMessageInfo> | null = null;

export const startTransporter = async () => {
  transporter = createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: vars.mail.user, // generated ethereal user
      pass: vars.mail.pass  // generated ethereal password
    }
  });
}



