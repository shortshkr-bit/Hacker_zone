console.log('Hint: the form handler is wired to the wrong element id.');

const form = document.getElementById('lab-form');
const username = document.getElementById('username');
const password = document.getElementById('password');
const message = document.getElementById('message');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const user = username.value.trim();
  const pass = password.value.trim();

  if (user.length < 3) {
    message.textContent = 'Username must be at least 3 characters.';
    message.className = 'message error';
    return;
  }

  if (pass.length < 8) {
    message.textContent = 'Password must be at least 8 characters.';
    message.className = 'message error';
    return;
  }

  message.textContent = 'Verification passed. Bug fixed.';
  message.className = 'message ok';
});
