// create-post.js
document.getElementById('createPostForm').addEventListener('submit', async function (event) {
    event.preventDefault(); // Prevenir recarga de la página

    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    const messageEl = document.getElementById('message');

    try {
        const response = await fetch('/postsPHP/api/posts', { // URL de la API para crear posts
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title, content })
        });

        if (response.ok) {
            messageEl.textContent = 'Post creado exitosamente.';
            messageEl.style.color = 'green';
            document.getElementById('createPostForm').reset(); // Limpiar el formulario
        } else {
            messageEl.textContent = 'Error al crear el post. Inténtalo de nuevo.';
            messageEl.style.color = 'red';
        }
    } catch (error) {
        messageEl.textContent = 'Hubo un problema con la solicitud. Inténtalo de nuevo.';
        messageEl.style.color = 'red';
        console.error('Error:', error);
    }
});
