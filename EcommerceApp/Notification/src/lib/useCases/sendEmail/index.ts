import { transporter } from '$/lib/infra/nodemailer/transport';
import vars from '$/vars';
import { SendEmailUseCase } from './types';

export const sendEmailUseCase: SendEmailUseCase = async (data) => {
  await transporter.sendMail({
    from: vars.mail.user,
    to: vars.mail.user,
    subject: `Purchase ${data.status}`,
    text: `Dear user ${data.userId}, Purchase of id ${data.purchaseId}`,
    html: `<p>Dear user ${data.userId}, Purchase of id ${data.purchaseId}</p>`
  });
};
