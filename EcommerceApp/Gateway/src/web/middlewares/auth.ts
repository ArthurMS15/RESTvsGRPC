import vars from "$/vars";
import { RequestHandler } from "express";
import jsonwebtoken from "jsonwebtoken";

export const authMiddleware: RequestHandler = (
  request,
  response,
  next
) => {
  if (!request.headers.authorization) {
    return response.status(401).send("No token provided");
  }

  const [, token] = request.headers.authorization?.split(' ') || [" ", " "];

  if (!token) {
    return response.status(401).send("Access denied");
  }

  try {
    const payload = jsonwebtoken.verify(token, vars.privateKey);
    const userIdFromToken = typeof payload != "string" && payload.user;

    if (!userIdFromToken) {
      return response.status(401).json({ message: "Invalid token" })
    }

    return next();
  } catch {
    return response.status(401).json({ message: "Invalid token" })
  }
}