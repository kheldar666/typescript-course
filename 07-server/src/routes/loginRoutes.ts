import { Request, Response, Router } from "express";

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

loginRoutes.post("/login", (req: Request, res: Response) => {
  const { email, password } = req.body;
  res.send(email + password);
});

export { loginRoutes };
