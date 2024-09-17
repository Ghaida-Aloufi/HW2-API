let nav = document.getElementById('nav');
let username = localStorage.getItem('username');

if (username) {
  nav.textContent = `Welcome, ${username}`;
} else {
  nav.textContent = "Guest";
}

document.getElementById('signout').addEventListener('click', function () {
  localStorage.removeItem('username');
  window.location.href = 'index.html';
});

