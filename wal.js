// Dark mode

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