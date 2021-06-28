
//------------------------Le DOM----------------------------//

//-----------------------click events-----------------------//

//Je pointe la classe click-event

/* const question = document.querySelector(".click-event");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.querySelector("#btn-2"); */

//Je lui ajoute le style voulue au click
/* question.addEventListener("click", ()=>{
    question.style.background = "green";
}) */

// Ajout de la classe question-clicked a l'evenement click
/* question.addEventListener("click", ()=>{
    question.classList.toggle("question-clicked");
}) */


//----------------------------Mouse Events-------------------//

//Mousemove

/* const mousemove = document.querySelector(".mousemove"); */

/* je crée un evenement mousemove */
/* je lui ajoute l'evenement mousemose */
/* j'ajoure l'evenemnt en argument de la fonction pour acceder a la propriete pageX,pageY */


/* window.addEventListener("mousemove", (event)=>{
    mousemove.style.left = event.pageX + "px";
    mousemove.style.top = event.pageY + "px";
    
}) */

//-----------------------Keypress Events---------------------//

/* const keypress = document.querySelector(".keypress");
const key = document.getElementById("key") */

/* document.addEventListener("keypress", (e) =>{
    key.textContent = e.key;
}) */


//-----------------------Keypress Events---------------------//

/* const navigation = document.querySelector("nav"); */

/* window.addEventListener("scroll", () =>{
    if(window.scrollY >120){
        navigation.style.top = 0;
    } else{
        navigation.style.top = "-50px";
    }
}); */

const inputName = document.querySelector("input[type='text']");

console.log(inputName);