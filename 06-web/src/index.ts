import { User } from "./models/User";

const JSON_SERVER_URL = "http://localhost:3000";

//const user = new User({ name: "Martin", age: 46 });

//axios.post(JSON_SERVER_URL + "/users", { name: "Martin", age: 46 });
// axios.get(JSON_SERVER_URL + "/users/1").then((response) => {
//   const user = response.data as UserProps;
//   console.log(user.name);
// });

let user = new User({ id: 32 });

user.fetch().then(() => {
  console.log(user);
});

user.save().then(() => {
  user.set({ name: "Babar" });
  user.save();
});
