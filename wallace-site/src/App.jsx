import { useState, useEffect, useRef } from 'react';
import './styles.css';

 // Text for Details
const contentMap = {
    BotC: (
        <>
        Blood on the Clocktower, or BotC, is a social-deduction board game where death is not the end. It requires a player to run the game 
        for the remaining players, which can be quite a tough job, especially for more complex modes.
        <br></br><br></br>
        Usually, every player is given a character that determines what team they're on and what abilities they have. There is a way to play, 
        however, where the players are only given their team (or alignment, it's called), and their characters are determined as they play.
        If a player does an action, they are then only able to be characters of their alignment who could do that action.
        <br></br><br></br>
        The person who runs the game, known as the storyteller, needs to keep track of every action of every player, and therefore every possible 
        character for every player. This is an enormous job, and as such, this way of playing is rarely ran. I am someone who has loved the little 
        bit I have played, and thus want to make it more accessible to run.
        <br></br><br></br>
        This way of playing is called Quantum, or Quantum Clocktower. Soon, my storytelling tool for Quantum will be here. Watch this space! I will 
        also sort out an email form for folks who want updates or otherwise want to get in touch with me about this.
        </>
    ),
    Knit: (
        <>
        A lot of fibrearts projects look the same to people who are new to the crafts. In facebook groups and subreddits dedicated to knitting, crochet 
        and other fibrearts, there are many, many questions from beginners asking whether this particular image is knit or crochet. I want to solve this 
        problem.
        <br></br><br></br>
        I am going to train a neural network to identify items as one of: hand-knit, machine-knit, crochet, or AI-generated. I am currently reaching out 
        to people who are prolific on social media (specifically Ravelry) to get permission to use their photos for training data. I will also set up an 
        online form where people can submit photos and label them as one of the above categories. I will check it all manually, but this allows me to 
        collect large amounts of data quickly and ethically.
        <br></br><br></br>
        Then, I will train the network locally (meaning, on my home computer), so to avoid any huge environmental issues caused by using data centres. 
        <br></br><br></br>
        Once the network is trained, I will set it up on this website so that people can access it. The idea is that they will be able to upload a photo 
        and recieve a judgement as to which type of craft it is. Watch this space for that! Due to generative AI getting better and better, it will likely 
        not be fully accurate for very long, but I'm happy to retrain it as and when it is needed. Additionally, if there is demand to add more fibrearts 
        (i.e. bobbin lace, etc.), or a different neural network to identify stitches (i.e. knit stitch, purl stitch, etc., or larger stitches like bobble 
        stitch, etc.), I will consider that as well. These will depend on how much data I can gain access to, and whether that data aligns with the way 
        the tool will be used. Regardless, feel free to reach out if you have opinions!
        </>
    ),
    SAData: (
        <>
        I recently found out about how much data is being produced by local councils and different organisations, and how much of that data has never 
        been viewed. South Australia is my area of interest, and as such, I intend on spending some time getting really into the data and seeing what 
        I can find out. Anything interesting will be visualised and presented here, so watch this space! I will go into my interpretations and what 
        I intend on doing with the findings.
        </>
    ),
    Wallace: (
        <>
        Wallace is a golden-retriever poodle cross who is only a dog in theory. He's scared of birds and has yet to work out that he can bite things. 
        He's depicted here guarding my projects, to the extent that he can guard anything. I.e., not at all. If you're ever wondering what he's doing, 
        it's probably sleeping.
        </>
    ),
    AboutMe: (
        <>
        This author has chosen to (attempt to) be somewhat anonymous, in this era of the internet where we are all encouraged to put all our information 
        online. You likely found this website through either one of my projects, in which case you are unlikely to know my identity, or through my 
        networking efforts, in which case you will. Either way, please feel free to reach out! I have really enjoyed putting this website together to show 
        my most passionate projects, and hopefully some useful tools!

        Soon there will be a means for folks to contact me here, so if you've found this before that's here, congratulations! You're super early!
        </>
    )
};

export default function App() {

    const [theme, setTheme] = useState("light");
    const [isHovering, setIsHovering] = useState(false);
    const [tailFrame, setTailFrame] = useState(2);

    const directionRef = useRef("add");

    const [selection, setSelection] = useState("BotC");

    // Dark mode
    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === "light" ? "dark" : "light");
    };

    // Tail wagging
    useEffect(() => {
        let tailInterval = null;

        if (isHovering) {
            tailInterval = setInterval(() => {
                setTailFrame(prevFrame => {
                    // Figure out direction
                    if (prevFrame <= 1) directionRef.current = "add";
                    if (prevFrame >= 5) directionRef.current = "subtract";

                    return directionRef.current === "add" ? prevFrame + 1 : prevFrame -1;
                });
            }, 150);
        } else {
            // Reset to default when mouse leaves
            setTailFrame(3); 
            directionRef.current = "add";
        }

        // Cleanup function: React runs this to clear the interval when the component unmounts or isHovering changes
        return () => clearInterval(tailInterval);
    }, [isHovering]);

    // Changing what page looking at
    useEffect(() => {
        if (selection === "BotC"){
            console.log("BotC");
        }
        else if (selection === "Knit"){
            console.log("Knit");
        }
        else if (selection === "SAData"){
            console.log("SAData");
        }
        else if (selection === "Wallace"){
            console.log("Wallace");
        }
        else if (selection === "AboutMe"){
            console.log("About Me");
        }

        return () => {
        }

    }, [selection]);

    // HTML/JSX
    return (
        <>
          <div
            className="background" 
              style={{ 
                  backgroundImage: theme === "light" 
                    ? "url('/Art/CrayonsTileDay.png')" 
                    : "url('/Art/Crayons Tiles Night.png')",
                minHeight: "100vh",
                
                backgroundSize: "80px",
                backgroundRepeat: "repeat",
                backgroundPosition: "top"
              }}
            >
            <img 
                src="/Art/night-mode.png" 
                alt="Lineart of a crescent moon with a star" 
                id="darkmode" 
                onClick={toggleTheme}
            />

            <div className="above">
                <div className="Wallace">
                    <div 
                        className="dogbody" 
                        id="dogbody"
                        onMouseEnter={() => setIsHovering(true)}
                        onMouseLeave={() => setIsHovering(false)}
                    >
                        <img 
                            src={theme === "light" ? "/Art/Crayons Wallace Idle.png" : "/Art/Crayons Night Wallace Idle.png"} 
                            alt="Crayon drawing of a black poodle" 
                            className="dogbody" 
                        />
                    </div>
                </div>

                <img 
                    src={`/Art/Crayons Wallace Tail 2 ${isHovering ? tailFrame : 3}.png`} 
                    alt="Crayon drawing of a black poodle tail" 
                    className="dogtail" 
                    id="dogtail" 
                />

                <img 
                    src="/Art/Crayons Decor Bookshelf.png" 
                    alt="Crayon drawing of a bookshelf" 
                    className="bookshelf" 
                />

                <img 
                    src={theme === "light" ? "/Art/Crayons Decor Window Day.png" : "/Art/Crayons Decor Window Night.png"} 
                    alt="Crayon drawing of a window" 
                    className="window" 
                />

                <img 
                    src={theme === "light" ? "/Art/Crayons Decor Lamp Day.png" : "/Art/Crayons Decor Lamp Night.png"} 
                    alt="Crayon drawing of a lamp" 
                    className="lamp" 
                />
            </div>

            <div className="table">

                <br></br>

                <div className="corners topleft"></div>
                <div className="corners topright"></div>
                <div className="corners bottomleft"></div>
                <div className="corners bottomright"></div>

                <div className="items">
                    <div className="subheader">
                        <div 
                            className={`option notlast ${selection === "BotC" ? "selected" : ""}`} 
                            onClick={() => setSelection("BotC")}
                        >
                            BotC Quantum Tool
                        </div>
                        <div 
                            className={`option notlast ${selection === "Knit" ? "selected" : ""}`} 
                            onClick={() => setSelection("Knit")}
                        >
                            Knitting NN Tool
                        </div>
                        <div 
                            className={`option notlast ${selection === "SAData" ? "selected" : ""}`} 
                            onClick={() => setSelection("SAData")}
                        >
                            South Australian Data Analytics
                        </div>
                        <div 
                            className={`option notlast ${selection === "Wallace" ? "selected" : ""}`} 
                            onClick={() => setSelection("Wallace")}
                        >
                            About Wallace
                        </div>
                        <div 
                            className={`option ${selection === "AboutMe" ? "selected" : ""}`} 
                            onClick={() => setSelection("AboutMe")}
                        >
                            About Me
                        </div>
                    </div>

                    <div className="Detail">
                        {contentMap[selection]}
                    </div>
                </div>

              <br></br>

              </div>

              
            </div>
        </>
    );
}