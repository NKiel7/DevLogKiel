
window.onload = () => {
    for(let i = 0; i < logs.post.length; i++) {
        const node = document.createElement("h3");
        node.textContent = logs.post[i].description + logs.post[i].howto;
        

        const title = document.createElement("h1");
        title.textContent = logs.post[i].game;
        
        const father = document.getElementById("logs");
        
        father.appendChild(title);
        father.appendChild(node);

    }
}