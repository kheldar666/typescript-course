import { User } from "./models/User";

const user = new User({ name: "Martin", age: 46 });

user.set({ name: "Martin Papy" });

console.log(user.get("name"));
console.log(user.get("age"));
