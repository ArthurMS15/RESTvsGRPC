import { RequestHandler } from 'express'

export type ShoppingCartController = {
  get: RequestHandler,
  create: RequestHandler,
  delete: RequestHandler,
  update: RequestHandler,
  checkout: RequestHandler
}