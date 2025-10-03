import React, {useState } from "react";
import Flashcard from "./Flashcard";

function FlashcardList ({ cards }) {
    const [currentIndex, setCurrentIndex] = useState(0);

  const nextCard = () => {
let randomIndex = Math.floor(Math.random() * cards.length);
    while (randomIndex === currentIndex && cards.length > 1) {
      randomIndex = Math.floor(Math.random() * cards.length);
    }   
     setCurrentIndex(randomIndex);
  };  

  return (
      <div className="flashcard-list">
      <Flashcard card={cards[currentIndex]} />
      <div className="button-container">
        <button className="next-card-button" onClick={nextCard}>
        Next Card
      </button>
    </div>
    <p>Total cards: {cards.length}</p>
   </div>
  );
}

export default FlashcardList;