import { User } from "./models/User";

const user = new User({ name: "Martin", age: 46 });

user.on("change", () => {
  console.log("Event #1 triggered");
});

user.on("change", () => {
  console.log("Event #2 triggered");
});

user.on("save", () => {
  console.log("Save Event #1 triggered");
});

user.trigger("change");
user.trigger("save");
console.log(user);
