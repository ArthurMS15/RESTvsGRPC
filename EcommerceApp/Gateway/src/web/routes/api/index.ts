import { loggerMiddleware } from '$/web/middlewares/logger';
import httpProxy from "express-http-proxy"
import { Router } from 'express';
import vars from '$/vars';
import { ecommerce } from '$/grpc/app';
import { credentials } from '@grpc/grpc-js';
import { loginUseCase } from '$/lib/useCases/login';
import jsonWebToken from 'jsonwebtoken';
import { authMiddleware } from '$/web/middlewares/auth';

const shoppingCartServiceStub = new (ecommerce as any).ShoppingCartService(vars.shoppingCartService.grpcUrl, credentials.createInsecure());
const catalogServiceStub = new (ecommerce as any).CatalogService(vars.catalogService.grpcUrl, credentials.createInsecure());
const wishlistService = new (ecommerce as any).WishlistService(vars.wishlistService.grpcUrl, credentials.createInsecure());

const apiRoutes = Router();

apiRoutes.use(loggerMiddleware);
apiRoutes.use(authMiddleware);

// REST PROXY
apiRoutes.all("/api/catalog*", httpProxy(vars.catalogService.restUrl));
apiRoutes.all("/api/cart*", httpProxy(vars.shoppingCartService.restUrl));
apiRoutes.all("/api/wishlist*", httpProxy(vars.wishlistService.restUrl));

// GRPC PROXY

// SerchCatalogService
apiRoutes.post('/api/grpc/searchCatalog', (req, res) => {
  catalogServiceStub.searchcatalog(req.body, (err, result) => res.json(result));
});


// ShoppingCart service
apiRoutes.post('/api/grpc/cart', (req, res) => {
  shoppingCartServiceStub.createShoppingCart(req.body, (err, result) => res.json(result));
});
apiRoutes.post('/api/grpc/cart/checkout', (req, res) => {
  shoppingCartServiceStub.checkout(req.body, (err, result) => res.json(result));
});
apiRoutes.get('/api/grpc/cart/:userId', (req, res) => {
  shoppingCartServiceStub.getShoppingCartsByUser({ userId: req.params.userId }, (err, result) => res.json(result));
});
apiRoutes.put('/api/grpc/cart/:id', (req, res) => {
  shoppingCartServiceStub.updateShoppingCart({ id: req.params.id, amount: req.body.amount }, (err, result) => res.json(result));
});
apiRoutes.delete('/api/grpc/cart/:id', (req, res) => {
  shoppingCartServiceStub.deleteShoppingCart({ id: req.params.id }, (err, result) => res.json(result));
});

// WishList service
apiRoutes.post('/api/grpc/wishlist', (req, res) => {
  wishlistService.createWishlistItem(req.body, (err, result) => res.json(result));
});
apiRoutes.get('/api/grpc/wishlist/:userId', (req, res) => {
  wishlistService.getWishlistItemsByUser(req.params, (err, result) => res.json(result));
});
apiRoutes.delete('/api/grpc/wishlist/:id', (req, res) => {
  wishlistService.deleteWishlistItem(req.params, (err, result) => res.json(result));
});




export default apiRoutes;