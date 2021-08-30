import { User, UserProps } from "../models/User";
import { CollectionView } from "./base/CollectionView";
import { UserLi } from "./UserLi";

export class UserUlList extends CollectionView<User, UserProps> {
  protected get rootElement(): string {
    return "ul";
  }

  protected renderItem(model: User, itemParent: Element): void {
    new UserLi(itemParent, model).render();
  }
}
