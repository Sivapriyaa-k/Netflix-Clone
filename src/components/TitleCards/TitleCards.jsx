import React, { useEffect, useRef, useState } from "react";
import "./TitleCards.css";
import title_cards from "../../assets/cards/Cards_data";
import { Link } from "react-router-dom";

function TitleCards({ title, category }) {
  const cardsRef = useRef();
  const [apiData, setApiData] = useState([]);
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYjE1OTEzZGQxZjJiZThiNDVjMDk2ZmMwNzY0NDVlMiIsIm5iZiI6MTc0MzQwNjkwMC4xNzkwMDAxLCJzdWIiOiI2N2VhNDczNGFmNzUyYTNiMjRmNzEyZjMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.PusX_RPnDEbJ0GEWJPXG1Encpb561bRjBladHPKw1pQ",
    },
  };

  const handleWheel = (e) => {
    e.preventDefault;
    cardsRef.current.scrollLeft += e.deltaY;
  };
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        category ? category : "now_playing"
      }?language=en-US&page=1`,
      options
    )
      .then((res) => res.json())
      .then((res) => setApiData(res.results))
      .catch((err) => console.error(err));

    cardsRef.current.addEventListener("wheel", handleWheel);
  }, []);
  return (
    <div className="titlecards">
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index) => {
          return (
            <Link to={`/player/${card.id}`} className="card" key={index}>
              <img
                src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path}
                alt=""
              />
              <p>{card.original_title}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default TitleCards;
