export default function setTokenSession ({ token }) {
    sessionStorage.setItem("token", JSON.stringify(token));
}