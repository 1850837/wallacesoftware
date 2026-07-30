// Dark mode

let currentMode = "light";
// document.getElementById("darkmode").onclick = function() {darkMode()};

function darkModeFunc(){

    console.log("here");
    // access the relevant tokens
    let wal = document.getElementsByClassName("dogbody")[1];
    let wind = document.getElementsByClassName("window")[0];
    let lamp = document.getElementsByClassName("lamp")[0];

    if (currentMode === "light"){
        currentMode = "dark";

        wal.src = "/Art/Crayons Night Wallace Idle.png";
        document.body.style.backgroundImage = "url('/Art/Crayons Tiles Night.png')";
        wind.src = "/Art/Crayons Decor Window Night.png";
        lamp.src = "/Art/Crayons Decor Lamp Night.png";
    }
    else if (currentMode === "dark"){
        currentMode = "light";

        wal.src = "/Art/Crayons Wallace Idle.png";
        document.body.style.backgroundImage = "url('/Art/CrayonsTileDay.png')";
        wind.src = "/Art/Crayons Decor Window Day.png";
        lamp.src = "/Art/Crayons Decor Lamp Day.png";
    }

    // change Wallace
    // change tiles
    // change window
    // change lamp
}

// Wag tail

let tail = document.getElementById("dogtail");
let i = 2;
let current = "add"
let tailInterval = null;

function wagTail(){
    let source = "/Art/Crayons Wallace Tail 2 " + i + ".png";
    tail.src = source;

    // ensuring current is up to date
    if (i <= 1){
        current = "add";
    }
    else if (i >= 5){
        current = "subtract";
    }

    // ensuring i is up to date
    if (current === "add"){
        i = i+1;
    }
    if (current === "subtract"){
        i = i-1;
    }
}

const dogBody = document.getElementById("dogbody");

dogBody.addEventListener("mouseenter", (event) => {
    if (!tailInterval) {
        tailInterval = setInterval(wagTail, 150);
    }
})

dogBody.addEventListener("mouseleave", (event) => {
    // Stop the animation
    clearInterval(tailInterval);
    tailInterval = null; // Reset variable

    // Reset tail to default image
    tail.src = "/Art/Crayons Wallace Tail 2 3.png";
    i = 2; // Reset frame counter for next hover
    current = "add";
})

// Bark

// Text?