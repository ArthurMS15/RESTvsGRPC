import vars from '$/vars';
import { SendNotification } from './types';
import { credentials } from '@grpc/grpc-js';
import { ecommerce } from '$/grpc/app';

export const sendNotification: SendNotification = async (data) => {
    const stub = new (ecommerce as any).NotificationService(vars.notificationService.grpcUrl, credentials.createInsecure());

    stub.createNotification(data, (err, feature) => null);
};