import vars from '$/vars';
import axios from 'axios';
import { CreatePurchase } from './types';

export const createPurchase: CreatePurchase = async (data) => {
  await axios.post(vars.purchaseService.restUrl, data);
};