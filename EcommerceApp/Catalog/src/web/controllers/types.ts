import { RequestHandler } from 'express'

export type CatalogController = {
  search: RequestHandler
}