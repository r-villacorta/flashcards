import React, {useState} from "react";
import accounting from "./assets/accounting.jpeg"
import "./App.css";


function App() {
   const cards = [
    { question: "What is a Variable cost?", answer: "Cost that varies depending on units of acivity" },
    { question: "What is a Fixed Cost?", answer: "Constant cost" },
    { question: "What does MOH inlude?", answer: "Indirect Labor" },
  ];
  
    const[currentCard, setCurrentCard]= useState(0);
    const[guess, setGuess]= useState("")
    const[feedback, setFeedback]= useState("")
    const [isFlipped, setIsFlipped] = useState(false);


    const handleGo= (e) => {
      e.preventDefault();
    
    const correctAnswer = cards[currentCard].answer.toLowerCase().trim();
    const userGuess = guess.toLowerCase().trim();

    if (userGuess === correctAnswer) {
      setFeedback("Correct!");
    } else {
      setFeedback("Try again!");
    }
      setIsFlipped(true);
  };

  const nextCard = () => {
    if (currentCard < cards.length -1) {
      setCurrentCard(currentCard +1);
      setGuess("");
      setFeedback("");
      setIsFlipped(false);
    }
  }

  const prevCard = () => {
    if (currentCard > 0) {
      setCurrentCard(currentCard -1);
      setGuess("");
      setFeedback("");
      setIsFlipped(false);
    }
  };

  return (
    <div 
      className="App"
      style={{ 
        backgroundImage: `url(${accounting})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh"
      }}
    >
      <h1>Accounting Flashcards</h1>
      <p>Are you ready for your test? Practice your managerial accounting vocabulary!</p>
     
    <div className="flashcard-container">
     <div className={`flashcard ${isFlipped ? "flipped": ""}`}>
        <div className="front">
         <h2>{cards[currentCard].question}</h2>
       </div>
         <div className="back">
          <h2>{cards[currentCard].answer}</h2>
        </div>
      </div>
    </div>

       <form onSubmit = {handleGo}>
        <input
          type="text"
          placeholder="Your answer"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          />
          <button type="submit">Go</button>
         </form>

         <p>{feedback}</p>

        <div className="button-container">
         <button onClick={prevCard} disabled={currentCard === 0}>Back</button>
         <button onClick={nextCard} disabled={currentCard === cards.length -1}>Next</button>
        </div>
        </div>
  );
}

export default App;
