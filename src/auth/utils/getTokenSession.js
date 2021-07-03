export default function getTokenSession() {
  return JSON.parse(sessionStorage.getItem("token"));
}
