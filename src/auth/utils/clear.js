export default function clear(key) {
  if (localStorage && localStorage.getItem(key)) {
    localStorage.removeItem(key);
  }

  if (sessionStorage && sessionStorage.getItem(key)) {
    sessionStorage.removeItem(key);
  }
}
