import { UserForm } from "./views/UserForm";
import { User } from "./models/User";

const root = document.getElementById("root");
if (root) {
  const userForm = new UserForm(
    root,
    User.buildUser({ name: "Martin", age: 46 })
  );
  userForm.render();
}
