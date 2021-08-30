import { NextFunction, Request, Response, Router } from "express";

export interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

const isAuthMiddleWare = (req: Request, res: Response, next: NextFunction) => {
  if (req.session && req.session.loggedIn) {
    next();
    return;
  }
  res.status(403).send("<h1>Access Forbidden</h1>");
};

const loginRoutes: Router = Router();

loginRoutes.get("/login", (req: Request, res: Response) => {
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
});

loginRoutes.post("/login", (req: RequestWithBody, res: Response) => {
  const { email, password } = req.body;
  if (
    email &&
    password &&
    email === "test@test.com" &&
    password === "test123"
  ) {
    req.session = { loggedIn: true };
    return res.redirect("/");
  }
  res.redirect("/login?error=true");
});

loginRoutes.get("/logout", (req: Request, res: Response) => {
  req.session = { loggedIn: false };
  res.redirect("/login");
});

loginRoutes.get(
  "/protected",
  isAuthMiddleWare,
  (req: Request, res: Response) => {
    return res.send(`
      <div>
           <div>
                <p>You are in the protected page</p>
           </div>
      </div>
    `);
  }
);

loginRoutes.get("/", (req: Request, res: Response) => {
  if (req.session && req.session.loggedIn) {
    return res.send(`
      <div>
           <div>
                <p>You are logged in</p>
                <a href="/logout">Logout</a>
           </div>
      </div>
    `);
  }
  res.redirect("/login");
});

export { loginRoutes };
