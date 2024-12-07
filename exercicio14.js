async function buscarPosts() {
    try {
        const resposta = await fetch("https://jsonplaceholder.typicode.com/posts");

        if (!resposta.ok) {
            throw new Error(`Erro: ${resposta.status}`);
        }

        const posts = await resposta.json();

        posts.forEach(post => console.log(post.title));
    } catch (erro) {
        console.error("Erro na requisição:", erro.message);
    }
}


buscarPosts();
