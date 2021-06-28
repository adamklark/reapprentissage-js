const bubbleMaker = () =>{
    
    const bubble = document.createElement("span");
    bubble.classList.add("bubble");
    document.body.appendChild(bubble);
    
    const size = Math.random() * 200 + 100 + "px";
    bubble.style.height = size;
    bubble.style.width = size;
    
    bubble.style.top = Math.random() * 100 +50 + "%";
    bubble.style.left = Math.random() *100 + "%";

    const plusMinus = Math.random() > 0.7 ? 1 : -1;
    bubble.style.setProperty("--left", Math.random() * 100 * plusMinus + "%");

};
setTimeout(() => {
    bubble.remove();
}, 2000);

setInterval(bubbleMaker, 250);

