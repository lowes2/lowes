//INSERT CUSTOM NAME FOR THE DOCUMENT
let pageName = document.title;
//for the home page it's nothing.
let sequence = "";

let header = document.getElementById("terminal-header");
let pageContent = document.getElementById("page-content");

let textLines = [
`
(press any key to skip loading animation)
ACCESSING DIRECTORY...............
-------------------------------------------
> 
> 
> 
> 
> COMPLETE 
> CURRENT DIRECTORY: directory/lowes_2/home/` + pageName  + `
> DISPLAYING FILES... ` 
];


if (pageName == "home"){
    textLines = [
`
(press any key to skip loading animation)
ACCESSING DIRECTORY...............
-------------------------------------------
> 
> 
> 
> 
> COMPLETE 
> CURRENT DIRECTORY: directory/lowes_2/home/
> DISPLAYING FILES... ` 
    ];
}


let lineIndex = 0;
let charIndex = 0;

typeNextChar();  
document.addEventListener("DOMContentLoaded", () => {
    let click = new Audio('sfx/website_ambience.mp3');
    click.play();
});



function typeNextChar() {
   
    const currentLine = textLines[lineIndex];  

    if (charIndex < currentLine.length) {
        
        header.textContent += currentLine[charIndex];
        charIndex++;
        setTimeout(typeNextChar, 10); // typing speed
    } else {
        header.textContent += "\n";
        lineIndex++;
        charIndex = 0;
        if (lineIndex < textLines.length) {
            setTimeout(typeNextChar, 50); // small delay between lines
        } else {
            pageContent.classList.add("visible");
        }
    }
}







document.onkeydown = function(a){
    
    pageContent.classList.add("visible");
    let click = new Audio('sfx/clack.mp3');
    click.volume = 0.3;
    click.play();
    switch(a.key){
        case "ArrowUp":
            sequence += "up";
            break;
        case "ArrowDown":
            sequence += "down";
            break;
        case "ArrowLeft":
            sequence += "left";
            break;
        case "ArrowRight":
            sequence += "right";
            break;
        case "a":
        case "A":
            sequence += "a";
            break;
        case "b":
        case "B":
            sequence += "b";
            break;
        
        default:
            sequence = "";
    }


    if (sequence === "upupdowndownleftrightleftrightba"){
        let song = new Audio('sfx/audio_of_anguish_and_torment.mp3');
        song.play();
        flashbang();
        sequence = "";
    }

};

const flash = document.getElementById("flashbang");
const background = document.getElementByTagName("background");

function flashbang() {
  void flash.offsetWidth; // force reflow
  flash.classList.add("active");
  setTimeout(() => {
    flash.classList.remove("active");
  }, 5000);

    
}






              

function tvPageTransition(url) {
    const overlay = document.getElementById("tv-overlay");
    overlay.classList.add("active");
    const overlayBackground = document.getElementById("tv-background");
    overlayBackground.classList.add("active");

    setTimeout(() => {
        window.location.href = url;
    }, 700); // match CSS transition duration
}

document.querySelectorAll('a.transition').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
    tvPageTransition(this.href);
    });
});                

