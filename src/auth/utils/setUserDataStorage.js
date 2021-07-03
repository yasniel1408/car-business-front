export default function setUserDataStorage ({ user }) {
    localStorage.setItem("user", JSON.stringify(user));
}
