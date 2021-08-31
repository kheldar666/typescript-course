import { Request, Response } from "express";
import { controller, get } from "./decorators";

@controller("")
export class IndexController {
  @get("/")
  index(req: Request, res: Response) {
    if (req.session && req.session.loggedIn) {
      return res.send(`
      <div>
           <div>
                <p>You are logged in</p>
                <a href="/auth/logout">Logout</a>
           </div>
      </div>
    `);
    }
    res.redirect("/auth/login");
  }
}
