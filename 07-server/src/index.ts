import express from "express";
import bodyParser from "body-parser";
import cookieSession from "cookie-session";
import "./controllers/LoginController";
import "./controllers/IndexController";
import "./controllers/ProtectedController";
import { AppRouter } from "./AppRouter";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ["dlvbzosvbslbvlb"] }));

app.use(AppRouter.getInstance());

app.listen(3000, () => {
  console.log("Listening on Port 3000");
});
