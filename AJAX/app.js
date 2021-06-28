async function chatAsync(){
    let response = await fetch("https://api.thecatapi.com/v1/images/search");
    let data = await response.json();
    /* console.log(data); */
    document.querySelector("img").src = data[0].url;
};

chatAsync();

/* fetch("https://api.thecatapi.com/v1/images/search")
.then(response => response.json());
.then(data => document.querySelector("img").src = data[0].url); */