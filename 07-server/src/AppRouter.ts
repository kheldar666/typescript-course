import { Router } from "express";

export class AppRouter {
  private static _router: Router;

  static getInstance(): Router {
    if (!AppRouter._router) {
      AppRouter._router = Router();
    }
    return AppRouter._router;
  }
}
