// auth.js
document.addEventListener('DOMContentLoaded', (event) => {
    if(localStorage.getItem('isLoggedIn') !== 'true') {
         // Redirect to login page
        window.location.href = 'index.html';
        alert("Login first to access the Homepage")
    }
});
