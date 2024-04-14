const loginForm = document.getElementById('login-form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

loginForm.addEventListener('submit', (e) => {
	e.preventDefault();
	if (usernameInput.value === 'admin' && passwordInput.value === 'password') {
		alert('Login successful!');
	} else {
		alert('Invalid username or password');
	}
});