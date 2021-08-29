import { User } from "./models/User";

let user = User.buildUser({ name: "Babar", age: 40 });
user.on("change", () => {
  console.log("User's props just changed !");
});
user.on("save", () => {
  console.log("User attributes were saved in the Database !");
});

user.on("error", () => {
  console.log("Oops ! Something went wrong.");
});
user.set({ name: "Casimir" });

console.log(user.get("name"));

user.save().then(() => {
  user.set({ name: "Casimir" });
  user.get("id");
  user.save();
});
