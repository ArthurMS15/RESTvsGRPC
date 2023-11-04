import { RequestHandler } from 'express'

export type WishlistController = {
  get: RequestHandler,
  create: RequestHandler,
  delete: RequestHandler
}