// auth.js
document.addEventListener('DOMContentLoaded', (event) => {
    if(localStorage.getItem('isLoggedIn') !== 'true') {
        window.location.href = 'index.html'; // Redirect to login page
    }
});
