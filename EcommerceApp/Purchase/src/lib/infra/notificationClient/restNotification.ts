import vars from '$/vars';
import axios from 'axios';
import { SendNotification } from './types';

export const sendNotification: SendNotification = async (data) => {
  await axios.post(vars.notificationService.restUrl, data);
};