import { User } from "./models/User";
import { UserList } from "./views/UserList";
import { UserUlList } from "./views/UserUlList";

const root = document.getElementById("root");
const zone1 = document.getElementById("zone1");
const zone2 = document.getElementById("zone2");

if (zone1 && zone2) {
  const userCollection = User.buildCollection();

  const userList = new UserList(userCollection, zone1);
  const userUlList = new UserUlList(userCollection, zone2);

  userCollection.on("change", () => {
    userList.render();
    userUlList.render();
  });

  userCollection.fetchAll();
}
