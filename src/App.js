import React from "react";
import FlashcardList from "./components/FlashcardList";
import accounting from "./assets/accounting.jpeg"
import "./App.css";


function App() {
   const cards = [
    { question: "What is a Variable cost?", answer: "Cost that varies depending on units of acivity" },
    { question: "What is a Fixed Cost?", answer: "Constant cost" },
    { question: "What does MOH inlude?", answer: "Indirect Labor" },
  ];

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
      <FlashcardList cards={cards} />
    </div>
  );
}

export default App;

