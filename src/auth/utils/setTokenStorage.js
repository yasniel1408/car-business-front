export default function setTokenStorage ({ token }) {
    localStorage.setItem("token", JSON.stringify(token));
}
