import { sendEmailUseCase } from '$/lib/useCases/sendEmail';
import { sendMailValidator } from '../validation/validators/sendMail';
import { NotificationController } from './types';

export const notificationController: NotificationController = {
  sendMail: async (req, res) => {
    const data = await sendMailValidator(req);
    const result = await sendEmailUseCase(data.body);
    res.json(result);
  },
};