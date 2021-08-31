import { Request, Response } from "express";
import { controller, get, post } from "./decorators";
import { validateBody } from "./decorators/validateBody";

@controller("/auth")
export class LoginController {
  @get("/login")
  getLogin(req: Request, res: Response): void {
    res.send(`
        <form method="post">
            <div>
                <label for="email">Email</label>
                <input type="email" name="email" id="email">
            </div>
            <div>
                <label for="password">Password</label>
                <input type="password" name="password" id="password">
            </div>
            <div>
                <button type="submit" id="submit">Submit</button>
            </div>
        </form>
    `);
  }

  @post("/login")
  @validateBody("email", "password")
  postLogin(req: Request, res: Response) {
    const { email, password } = req.body;
    if (email === "test@test.com" && password === "test123") {
      req.session = { loggedIn: true };
      return res.redirect("/");
    }
    res.redirect("/auth/login?error=true");
  }

  @get("/logout")
  getLogout(req: Request, res: Response) {
    req.session = { loggedIn: false };
    res.redirect("/auth/login");
  }
}
