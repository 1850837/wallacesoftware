import { useState, useEffect, useRef } from 'react';
import './styles.css';

export default function App() {

    const [theme, setTheme] = useState("light");
    const [isHovering, setIsHovering] = useState(false);
    const [tailFrame, setTailFrame] = useState(2);

    const directionRef = useRef("add");

    // Dark mode
    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === "light" ? "dark" : "light");
    };

    // Tail wagging
    useEffect(() => {
        let tailInterval = null;

        if (isHovering) {
          console.log("here!");
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

                <div class="corners topleft"></div>
                <div class="corners topright"></div>
                <div class="corners bottomleft"></div>
                <div class="corners bottomright"></div>

                <div class="items">
                    <div class="subheader">
                        <div class="option selected notlast">
                            BotC Quantum Tool
                        </div>
                        <div class="option notlast">
                            Knitting NN Tool
                        </div>
                        <div class="option notlast">
                            South Australian Data Analytics
                        </div>
                        <div class="option notlast">
                            About Wallace
                        </div>
                        <div class="option">
                            About Me
                        </div>
                    </div>

                    <div class="Detail">
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
                    </div>
                </div>

              <br></br>

              </div>

              
            </div>
        </>
    );
}