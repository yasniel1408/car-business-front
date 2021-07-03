export default function getTokenStorage() {
  return JSON.parse(localStorage.getItem("token"));
}
