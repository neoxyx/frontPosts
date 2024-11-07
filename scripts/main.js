document.getElementById('registerForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value
    };

    try {
        const response = await fetch('/postsPHP/api/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        if (response.ok) {
            alert('Usuario registrado con éxito');
        } else {
            alert('Error al registrar el usuario');
        }
    } catch (error) {
        console.error('Error:', error);
    }
});

document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = {
        email: document.getElementById('email').value,
        password: document.getElementById('password').value
    };

    try {
        const response = await fetch('/postsPHP/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        if (response.ok) {
            alert('Login exitoso');
            window.location.href = 'posts.html';
        } else {
            alert('Credenciales incorrectas');
        }
    } catch (error) {
        console.error('Error:', error);
    }
});
