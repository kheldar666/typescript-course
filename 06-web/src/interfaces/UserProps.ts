import { Identity } from "./Identity";

export interface UserProps extends Identity {
  name?: string;
  age?: number;
}
