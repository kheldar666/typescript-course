import { User, UserProps } from "../models/User";
import { CollectionView } from "./base/CollectionView";
import { UserShow } from "./UserShow";

export class UserList extends CollectionView<User, UserProps> {
  protected renderItem(model: User, itemParent: Element): void {
    new UserShow(itemParent, model).render();
  }
}
