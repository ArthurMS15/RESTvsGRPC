import { sendEmailUseCase } from '$/lib/useCases/sendEmail';
import { NotificationService } from './types';

export const notificationService: NotificationService = {
  createNotification: async (call, callback) => {
    const result = await sendEmailUseCase(call.request);

    callback(null, result);
  },
};
