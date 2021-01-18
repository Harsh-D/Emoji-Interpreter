import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😀": "Grinning Face",
  "😃": "Grinning face with big eyes",
  "🤭": "Face with Hand Over Mouth",
  "🤫": "Shushing Face",
  "🤣": "Rolling on the Floor Laughing",
  "😏": "Smirking Face",
  "😒": "Unamused Face",
  "😬": "Grimacing Face"
};

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    const userInput = event.target.value;
    if (userInput in emojiDictionary) setMeaning(emojiDictionary[userInput]);
    else setMeaning("Emoji not in the database");
  }

  function onEmojiClick(emoji) {
    setMeaning(emojiDictionary[emoji]);
  }

  return (
    <div className="App">
      <h1>Emoji Interpreter</h1>
      <input onChange={emojiInputHandler}></input>
      <div className="meaning">{meaning}</div>
      <h2>Emoji's added to the database</h2>
      {Object.keys(emojiDictionary).map((item) => (
        <span
          onClick={() => onEmojiClick(item)}
          key={item}
          className="emoji-small"
        >
          {item}
        </span>
      ))}
    </div>
  );
}
