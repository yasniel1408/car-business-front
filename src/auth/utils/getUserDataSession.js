export default function getUserDataSession() {
    return JSON.parse(sessionStorage.getItem("user"));
}