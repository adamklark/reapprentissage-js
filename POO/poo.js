//création d'un objets
const obj = {
    ville: "Toulouse",
    nom: "Jean",
}

//ajouter
obj.age = 24;
/* console.log(obj); */

//supprimer
delete obj.ville;
/* console.log(obj); */

/* parcourir un objet */
for(const clee in obj){
   /*  console.log(clee); */
}



/* fonction constructeur */

//(constructeur = User)
function User(pseudo, ville){
    this.pseudo = pseudo;
    this.ville  = ville;
    
    /* console.log(this.pseudo + " habite a " + this.ville) */
};

const user1 = new User("Patrick", "Londres");



/* factory constructeur */

function User3(pseudo, ville){
    return{
        pseudo,
        ville
    }
}

const user4 = User3("jean", "Tokyo");

console.log(user4);



