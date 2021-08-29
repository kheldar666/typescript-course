import { User } from "./models/User";

const JSON_SERVER_URL = "http://localhost:3000";

//const user = new User({ name: "Martin", age: 46 });

//axios.post(JSON_SERVER_URL + "/users", { name: "Martin", age: 46 });
// axios.get(JSON_SERVER_URL + "/users/1").then((response) => {
//   const user = response.data as UserProps;
//   console.log(user.name);
// });

let user = new User({ name: "Babar", age: 40 });
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
