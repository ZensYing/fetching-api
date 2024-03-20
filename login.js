document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission behavior

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Example hardcoded credentials for demonstration
    const correctUsername = 'user';
    const correctPassword = 'pass';

    // Inside your login.js where the login is successful
if (username === correctUsername && password === correctPassword) {
    alert('Login successful');
    localStorage.setItem('isLoggedIn', 'true'); // Set login flag
    window.location.href = 'Homepage.html';
} else {
    alert('Login failed: Incorrect username or password');
}

});
