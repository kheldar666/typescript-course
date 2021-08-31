import { NextFunction, Request, Response } from "express";

export const isAuth = (req: Request, res: Response, next: NextFunction) => {
  if (req.session && req.session.loggedIn) {
    next();
    return;
  }
  res.status(403).send("<h1>Access Forbidden</h1>");
};
