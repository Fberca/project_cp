"use client";
import ImageWithFallback from "../ImageWithFallback/ImageWithFallback";
import "./card.css";

export default function Card({ card }) {
  return (
    <div className="card-image">
      <a href={card.url} target="_blanck">
        {/* <img id="x" src={card.img}></img> */}

        <ImageWithFallback
          src={card.img}
          alt={card.text}
          // className="max-width: 200px"
        />

        {/* {card.type === 'youtube' ? (
          //<h1 className="card-icon">youtube</h1>
          <div className="card-icon-image">
            <img
              id="icon-spotify"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Spotify_App_Logo.svg/2048px-Spotify_App_Logo.svg.png"
            ></img>
          </div>
        ) : (
          //<h1 className="card-icon">spotify</h1>
          <img
            id="icon-youtube"
            src="https://www.freepnglogos.com/uploads/youtube-logo-hd-8.png"
          ></img>
        )} */}
      </a>
    </div>
  );
}
