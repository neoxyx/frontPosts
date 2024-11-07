async function loadPosts() {
    try {
        const response = await fetch('/api/posts/1');
        const posts = await response.json();

        let postsHTML = '';
        posts.forEach(post => {
            postsHTML += `
                <div class="post">
                    <h3>${post.title}</h3>
                    <p>${post.content}</p>
                    <hr>
                </div>
            `;
        });
        document.getElementById('postsContainer').innerHTML = postsHTML;
    } catch (error) {
        console.error('Error:', error);
    }
}

window.onload = loadPosts;
