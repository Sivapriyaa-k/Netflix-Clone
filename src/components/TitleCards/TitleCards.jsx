import React, { useEffect, useRef } from "react";
import "./TitleCards.css";
import title_cards from "../../assets/cards/Cards_data";

function TitleCards() {
  const cardsRef = useRef();

  const handleWheel = (e) => {
    e.preventDefault;
    cardsRef.current.scrollLeft += e.deltaY;
  };
  useEffect(() => {
    cardsRef.current.addEventListener("wheel", handleWheel);
  }, []);
  return (
    <div className="titlecards">
      <h2>Popular On Netflix</h2>
      <div className="card-list" ref={cardsRef}>
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
