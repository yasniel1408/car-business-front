export default function getUserDataStorage() {
    return JSON.parse(localStorage.getItem("user"));
}

