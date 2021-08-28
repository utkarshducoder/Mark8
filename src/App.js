import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "☺️": "Smiling",
  "❤️": "Heart",
  "✔️": "Check Mark",
  "☀️": "Sun",
  "☂️": "Umbrella",
  "⚡": "High Voltage",
  "😍": "Smiling Face with Heart-Eyes",
  "☠": "Danger",
  "😡": "Anger Face"
};

var emojisWeknow = Object.keys(emojiDictionary);
export default function App() {
  var [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    setMeaning(meaning);
    //console.log(meaning);

    //console.log(event.target.value);
  }
  function emojiclickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  if (meaning === undefined) {
    meaning = "We don't have this in our database";
  }
  return (
    <div className="App">
      <h1>inside outtt!</h1>

      <input onChange={emojiInputHandler} />

      <h2> {meaning} </h2>

      <h3>emojis we know</h3>

      {emojisWeknow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiclickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {" "}
            {emoji}{" "}
          </span>
        );
      })}
    </div>
  );
}
