import { CreateUseCase } from './types';

import { entityManager } from '$/lib/infra/typeorm/data-source';
import { Purchase } from '$/lib/infra/typeorm/entities/purchase';

export const createUseCase: CreateUseCase = async (data, sendNotification) => {
  const created = await entityManager.save(Purchase, { ...data, status: 'processing' });

  await sendNotification({
    userId: created.userId,
    purchaseId: created.id,
    status: created.status
  });

  setTimeout(async () => {
    const updated = await entityManager.save(Purchase, { ...created, status: 'completed' });

    await sendNotification({
      userId: updated.userId,
      purchaseId: updated.id,
      status: updated.status
    });

  }, 10000);

  return created;
};