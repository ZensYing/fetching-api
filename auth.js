// auth.js
document.addEventListener('DOMContentLoaded', (event) => {
    if(localStorage.getItem('isLoggedIn') !== 'true') {
        alert("Login first to access the Homepage")
        window.location.href = 'index.html'; // Redirect to login page
    }
});
