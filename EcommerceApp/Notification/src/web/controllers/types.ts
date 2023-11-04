import { RequestHandler } from 'express';

export type NotificationController = {
  sendMail: RequestHandler;
};