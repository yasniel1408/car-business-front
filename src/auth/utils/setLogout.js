import clear from "./clear";

export default function setLogout(key) {
  clear("user");
  clear("token");
}
