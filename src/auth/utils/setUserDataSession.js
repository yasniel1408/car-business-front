export default function setUserDataSession ({ user }) {
    sessionStorage.setItem("user", JSON.stringify(user));
}