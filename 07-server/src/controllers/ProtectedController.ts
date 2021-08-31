import { Request, Response } from "express";
import { use } from "./decorators/use";
import { controller, get } from "./decorators";
import { isAuth } from "../middleware/isAuth";

@controller("")
export class ProtectedController {
  @get("/protected")
  @use(isAuth)
  getProtected(req: Request, res: Response) {
    return res.send(`
      <div>
           <div>
                <p>You are in the protected page</p>
           </div>
      </div>
    `);
  }
}
