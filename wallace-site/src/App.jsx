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

                <div class="items">
                    <div class="subheader">
                        Blood on the Clocktower Quantum Software
                    </div>
                    I'm making software to make storytelling Quantum Blood on the Clocktower easier!
                </div>

                <div class="items">
                    Knitting and Crochet Neural Network
                </div>

                <div class="items">
                    South Australian Data Analytics
                </div>

                <div class="items">
                    About Me
                </div>

                <div class="items lastitem">
                    About Me Real
                </div>

                {/* Text here! <br></br>

                Loads more text!
                <br /><br /><br /><br />
                More!!!
                <br /><br /><br /><br />
                More!!!
                <br /><br /><br /><br />
                More!!!
                <br /><br /><br /><br />
                More!!!
                <br /><br /><br /><br />
                More!!!
                <br /><br /><br /><br />
                More!!!
                <br /><br /><br /><br />
                More!!!
                <br /><br /><br /><br />
                More!!!
                <br /><br /><br /><br />
                More!!!
                <br /><br /><br /><br />
                More!!!
                <br /><br /><br /><br />
                More!!!
                <br /><br /><br /><br />
                More!!!
                <br /><br /><br /><br />
                More!!!
                <br /><br /><br /><br />
                More!!!
                <br /><br /><br /><br />
                More!!!
                <br /><br /><br /><br />
                More!!!
                <br /><br /><br /><br />
                More!!!
                <br /><br /><br /><br />
                More!!! */}
              </div>
            </div>
        </>
    );
}