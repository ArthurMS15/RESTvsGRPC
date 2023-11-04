import vars from '$/vars';
import { CreatePurchase } from './types';
import { credentials } from '@grpc/grpc-js';
import { ecommerce } from '$/grpc/app';

export const createPurchase: CreatePurchase = async (data) => {
    const stub = new (ecommerce as any).PurchaseService(vars.purchaseService.grpcUrl, credentials.createInsecure());

    stub.createPurchase(data, (err, feature) => null);
};