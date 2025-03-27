import React from "react";
import "./TitleCards.css";
import title_cards from "../../assets/cards/Cards_data";
function TitleCards() {
  return (
    <div className="titlecards">
      <h2>Popular On Netflix</h2>
      <div className="card-list">
        {title_cards.map((card, index) => {
          return (
            <div className="card" key={index}>
              <img src={card.image} />
              <p>{card.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TitleCards;
