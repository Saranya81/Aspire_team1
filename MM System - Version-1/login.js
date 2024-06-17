document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const role = document.querySelector('input[name="role"]:checked').value;
    const errorMessage = document.getElementById('errorMessage');
    if (!email || !password || !role) {
        errorMessage.textContent = 'All fields are required';
        return;
    }
    if (email === 'test@example.com' && password === 'password' && role == "admin") {

        window.location.href = "admin.html";
    } else {
        errorMessage.textContent = 'Invalid login credentials or not registered';
    }
});
