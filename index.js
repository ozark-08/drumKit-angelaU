// document.querySelector("button").addEventListener("click",handleClick)
// function handleClick() {
//     alert("i got clicked")
// }


//to identify what button has been clicked and then using the function makeSound
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        currentEventAnimation(buttonInnerHTML);
    })
}


function makeSound(key) {
    switch (key) {
        case "w":
            const crash = new Audio("./sounds/crash.mp3");
            crash.play();
            break;
        case "a":
            const snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break;
        case "s":
            const tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;
        case "d":
            const tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;
        case "j":
            const tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;
        case "k":
            const tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;
        case "l":
            const kickBass = new Audio("./sounds/kick-bass.mp3");
            kickBass.play();
            break;
    
        default:console.log(buttonInnerHTML);
    }
}

//keypress events can be applied to the whole webpage and the whole page would listen to any keypress
//to identify which key has been pressed and then using the makeSound function
document.addEventListener("keydown", function(event) {
    makeSound(event.key);
    currentEventAnimation(event.key);
})

function currentEventAnimation(currentkey) {
    var activeElement = document.querySelector("." + currentkey);
    activeElement.classList.add("pressed");

    setTimeout(() => {
        activeElement.classList.remove("pressed");
    }, 100);
}




// document.querySelectorAll(".drum")[0].addEventListener("click", function(){
//     const audio = new Audio(src1);
//     audio.play();
// } )....