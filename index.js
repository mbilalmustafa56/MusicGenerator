// var j = document.querySelectorAll("button").length;
// for (let i = 0; i < j; i++) {
//     // document.querySelectorAll("button")[i].addEventListener("click", function () {
//     //     if (this.innerHTML === "w") {
//     //         var audio = new Audio("sounds/tom-1.mp3");
//     //         audio.play();
//     //     }
//     //     else if (this.innerHTML === "a") {
//     //         var audio = new Audio("sounds/tom-2.mp3");
//     //         audio.play();
//     //     }
//     //     else if (this.innerHTML === "s") {
//     //         var audio = new Audio("sounds/tom-3.mp3");
//     //         audio.play();
//     //     }
//     //     else if (this.innerHTML === "d") {
//     //         var audio = new Audio("sounds/tom-4.mp3");
//     //         audio.play();
//     //     }
//     //     else if (this.innerHTML === "j") {
//     //         var audio = new Audio("sounds/crash.mp3");
//     //         audio.play();
//     //     }
//     //     else if (this.innerHTML === "k") {
//     //         var audio = new Audio("sounds/kick-bass.mp3");
//     //         audio.play();
//     //     }
//     //     else {
//     //         var audio = new Audio("sounds/snare.mp3");
//     //         audio.play();
//     //     }
//         // document.querySelectorAll("button")[i].addEventListener("click", function () {

//         //     this.style.color = "red";

//         //     var button = this;

//         //     setTimeout(function () {
//         //         button.style.color = "black";
//         //     }, 3000);

//         // });
//         var buttoninnerHTML=this.innerHTML;
//         makeSound(buttoninnerHTML);
//     }



 
// document.addEventListener("keypress",function(event){
// makeSound(event.key);
// });

function makeSound(key) {
    switch (key) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;

        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;

        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;

        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;

        case "j":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;

        case "k":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;

        case "l":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;

        default:
            break;
    }
}

 function makeSound(key){
     if (key === "w") {
        new Audio("sounds/tom-1.mp3").play();
    }
    else if (key === "a") {
        new Audio("sounds/tom-2.mp3").play();
    }
    else if (key === "s") {
        new Audio("sounds/tom-3.mp3").play();
    }
    else if (key === "d") {
        new Audio("sounds/tom-4.mp3").play();
    }
    else if (key === "j") {
        new Audio("sounds/crash.mp3").play();
    }
    else if (key === "k") {
        new Audio("sounds/kick-bass.mp3").play();
    }
    else if (key === "l") {
        new Audio("sounds/snare.mp3").play();
    }
 }

// using jQuery 
$(".drum").click(function(){
    makeSound(this.innerHTML);
})

$(document).keypress(function(event){
    makeSound(event.key);
})