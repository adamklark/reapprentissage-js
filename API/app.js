//
userData = [];

//crée une fonction asychrone
const fetchUser = async () =>{
    //cherche l'url, qui renvoie un onjet promesse
    const url = "https://randomuser.me/api/?results=14";
    //attend que l'url soient traiter
     await fetch(url)
        //resout le promesse avec la méthode then qui prend en argument le resultat de then
        .then((resolve) => resolve.json())//affiche la résolution au format json
        //affiche les données du json de userData dans un tableau
        .then((data) => (userData = data.results));
    console.log(userData);
};



const userDisplay = async () => {
    await fetchUser();

    
    document.body.innerHTML = userData.map((user)=>
        `<div class="card">
        <img src=${user.picture.large} alt="photo de ${user.name.last}"
            <h3>${user.name.first}</h3>
        </div>`
        

    ).join("")
}

userDisplay();