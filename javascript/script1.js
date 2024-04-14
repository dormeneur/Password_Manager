const loginForm = document.getElementById('login-form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

loginForm.addEventListener('submit', (e) => {
	e.preventDefault();
	if (usernameInput.value == 'admin' && passwordInput.value == 123456) {
		alert("Accepted");

	} else {
		alert('Invalid username or password');
	}
}
// let a = prompt("Enter your email");
// if(a === "abcd@gmail.com"){

// }
