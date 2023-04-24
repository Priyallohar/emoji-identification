import "./styles.css";
import React, { useState } from "react";

const emoDictionary = {
  "🚣": "Person Rowing Boat",
  "🗾": "Map of Japan",
  "⛰️": "Mountain",
  "🌋": "Volcano",
  "🗻": "Mount Fuji",
  "🏠": "House",
  "🏡": "House with Garden",
  "🏢": "Office Building",
  "🏣": "Japanese Post Office",
  "🏤": "Post Office",
  "🏥": "Hospital",
  "🏦": "Bank",
  "🏨": "Hotel",
  "🏩": "Love Hotel",
  "🏪": "Convenience Store",
  "🏫": "School",
  "🏬": "Department Store",
  "🏭": "Factory",
  "🏯": "Japanese Castle",
  "🏰": "Castle",
  "💒": "Wedding",
  "🗼": "Tokyo Tower",
  "🗽": "Statue of Liberty",
  "⛺": "Tent",
  "🌄": "Sunrise Over Mountains",
  "🌅": "Sunrise",
  "🌆": "Cityscape at Dusk",
  "🌇": "Sunset",
  "🌉": "Bridge at Night",
  "🎠": "Carousel Horse",
  "🎡": "Ferris Wheel",
  "🎢": "Roller Coaster",
  "🚂": "Locomotive",
  "🚃": "Railway Car",
  "🚄": "High-Speed Train",
  "🚅": "Bullet Train",
  "🚆": "Train",
  "🚇": "Metro",
  "🚈": "Light Rail",
  "🚉": "Station",
  "🚊": "Tram",
  "🚝": "Monorail",
  "🚞": "Mountain Railway",
  "🚨": "Police Car Light",
  "🚥": "Horizontal Traffic Light",
  "🚦": "Vertical Traffic Light",
  "⛵": "Sailboat",
  "🚤": "Speedboat",
  "⛴️": "Ferry",
  "🚢": "Ship",
  "✈️": "Airplane",
  "💺": "Seat",
  "🚁": "Helicopter",
  "🚟": "Suspension Railway",
  "🚠": "Mountain Cableway",
  "🚡": "Aerial Tramway",
  "🚀": "Rocket",
  "⛱️": "Umbrella on Ground"
};

const emojiInDictinary = Object.keys(emoDictionary);

export default function App() {
  const [inputemo, setemoji] = useState("");
  const [meaning, setMeaning] = useState("Emoji name will appear here..");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    setemoji(inputemo);

    if (userInput in emoDictionary) {
      setMeaning(emoDictionary[userInput]);
    } else setMeaning("Oops! we dont have it in database");
  }

  function emojiClickHandler(emoji) {
    setMeaning(emoDictionary[emoji]);
  }

  return (
    <div className="App">
      <h1 className="header">Travel & Places</h1>
      <input
        onChange={emojiInputHandler}
        placeholder={"add emoji here..."}
        style={{
          padding: "1em",
          minWidth: "80%",
          textAlign: "center",
          outline: "none"
        }}
      />
      <h2>"{meaning}"</h2>
      {emojiInDictinary.map(function (item) {
        return (
          <span
            onClick={() => emojiClickHandler(item)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={item}
          >
            {" "}
            {item}{" "}
          </span>
        );
      })}

      <section class="links">
        <button>
          <a href="https://github.com/Priyallohar/emoji-identification">
            Git Code
          </a>
        </button>
        <button>
          <a href="https://priyalneogportfolio.netlify.app/">Portfolio</a>
        </button>
      </section>
    </div>
  );
}
