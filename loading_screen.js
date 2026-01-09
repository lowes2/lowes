//INSERT CUSTOM NAME FOR THE DOCUMENT
let pageName = document.title;
//for the home page it's nothing.


document.onkeypress = function (e) {
    e = e || window.event;
    pageContent.classList.add("visible");
};



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

let header = document.getElementById("terminal-header");
let pageContent = document.getElementById("page-content");

let lineIndex = 0;
let charIndex = 0;

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

typeNextChar();                

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

