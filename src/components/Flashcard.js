import React, { useState } from "react";
import "../App.css"

function Flashcard({ card }) {
    const [flipped, setFlipped] = useState(false);

    return (
      <div className = "flashcard-container" 
      onClick={() => setFlipped(!flipped)}>
        <div className={`flashcard ${flipped ? "flipped" : ""}`}>
             {/* FRONT SIDE */}
          <div className="front">{card.question}</div>
             {/* BACK SIDE */}
            <div className="back">{card.answer}</div>
             </div>
            </div>
        );
    }
    
    export default Flashcard;

          

