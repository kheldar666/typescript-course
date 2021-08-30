import express from "express";
import { loginRoutes } from "./routes/loginRoutes";
import bodyParser from "body-parser";
import cookieSession from "cookie-session";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ["dlvbzosvbslbvlb"] }));
app.use(loginRoutes);

app.listen(3000, () => {
  console.log("Listening on Port 3000");
});
