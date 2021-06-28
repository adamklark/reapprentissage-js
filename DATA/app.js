//Les tableaux
let array = ["Lyon", "Paris", "Toulon", "Aix"]

//accéder a un element d'un tableaux
//console.log([let,const[index de la table]]);
/* console.log(array[2]); */

let array2 = ["Bordeaux", 24, true, [1,2], {nom: "Denis"}]
//accéder a un element d'un tableaux
//console.log(let[index de la table].valeur du clefs de l'objet);
/* console.log(array2[4].nom); */

let objet = {
    pseudo: "Mark",
    age: 29,
    techno: ["Javascript", "React", "Python"],
    admin: false,
};

//-------------------Les Objets------------------//
let data = [
    {
        pseudo: "Mark",
        age: 29,
        techno: ["Javascript", "React", "Python"],
        admin: false,
    },
    {
        pseudo: "Louis",
        age: 29,
        techno: ["Css", "React", "PHP"],
        admin: false,
    },
    {
        pseudo: "Clark",
        age: 29,
        techno: ["Javascript", "React", "NodeJs"],
        admin: true,
    },
    
];
/* console.log(data[2].pseudo); */

//Do While

let d = 0;

do{
    d++;
  /*   console.log(d); */
}while(d < 5);

//For 
for(const user of data){
    /* document.body.innerHTML += `<li>${user.pseudo}</li>`; */
}

//For
//initiation de l'index (i) a 0
//incrémentation de l'endex  (i) par 1
//indique la valeur de i est superieur la la longeur de data
for(i = 0; i < data.length; i++){
    document.body.innerHTML += `<h2>${data[i].pseudo}<h2>`;
}

document.body.addEventListener("click", (e)=>{
    //switch
    switch(e.target.id){
    case "js":
    document.body.style.background = "yellow";
    break;
    case "php":
    document.body.style.background = "viloet";
    break;
    case "python":
    document.body.style.background = "blue";
    break;
    default:null;
}
})

//String

let string = "Js est un language orienté objet";

/* console.log(eval("1"+5)); */
/* console.log(string.indexOf("l")); */

/* let newString = string.slice(2);
console.log(newString); */

/* Remplace un texte par un autre */
/* console.log(string.replace("Js", "Python")); */

//------------Les numbers---------------//

let number = 42.1457854125698;
//La méthode toFixed détemrmine la quantité de chiffre a garder apres la virgule
/* console.log(number.toFixed(2)); */

//transforme une chaine de caractere contenent un nombre en nombre
/* console.log(parseInt("10")); */


//Math
/* console.log(Math.PI); */

/* console.log(Math.round(4.5)); */
//Arrondie apres le virgule(ou le point) a l'unite superieur

/* console.log(Math.floor(4.9)); */
//Arrondie apres le virgule(ou le point) a l'unite inferieur

/* console.log(Math.pow(2, 7)); */
//2^7

//Methode pour les tableau

let array3 = ["javascript", "php", "java"];
let array4 = ["ruby", "solidarity"];

/* let newArray = array3.concat(array4);
console.log(newArray); */

/* let newArray = [...array3, ...array4];
console.log(newArray); */

/* console.log(array3.join("-")); */

//  IMPORTANT! //
let arrayNumber = [12, 24, 44, 98, 1, 70, 54];
console.log(arrayNumber.reduce((x, y) => x + y ));

arrayNumber.push("COUCOU")
/* console.log(arrayNumber); */

//-------------FILTER, SORT, MAP-------------//

/* console.log(arrayNumber.filter((number) => number > 10)); */
/* console.log(arrayNumber.sort((a, b) => a - b )); */
/* arrayNumber.map((number)=> console.log(number)); */
/* document.body.innerHTML = arrayNumber.map((number)=>`<li>${number}</li>`).join(""); */

document.body.innerHTML = data.map((user)=>
`<div class="user-card">
    <h2>${user.pseudo}</h2>
    <p>Age: ${user.age}</p>
<div>`).join("");

//------------------Les regex---------------//

let mail = "adamt125@hotmail.fr";

//remplace une expresion par la valeur voulue
/* console.log(mail.replace(/adam/,"de")) */

/* console.log(mail.match(/[zua]/)); */

// Verifier la presence d'un chiffre
console.log(mail.match(/\d/));

// vérifie la presence de tous les lettre de a jusqu'à z
//affiche la premiere lette trouvé 
console.log(mail.match(/[a-z]/));

//verification des lettres present[a-z]
//verification du présence de l'arobase +@
//accepte tous les caracteres [w-]
//accepte entre 2 et 4 caractere {2,4}
//fin du regex $
console.log(mail.match(/[a-z]+@[w-]\.[a-z]{2,4}$/));