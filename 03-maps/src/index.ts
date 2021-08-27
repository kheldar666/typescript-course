import { User } from "./User";
import { Company } from "./Company";
import { CustomGoogleMap } from "./CustomGoogleMap";

const user = new User();
const company = new Company();

//Using a Custom map allows us to expose only the methods we want
const gMap = new CustomGoogleMap("map");

gMap.addMarker(user);
gMap.addMarker(company);
