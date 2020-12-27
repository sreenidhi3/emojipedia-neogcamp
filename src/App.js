import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "👋": "Waving Hand",
  "🤚": "Raised Back of Hand",
  "✋": "Raised Hand",
  "🖖": "Vulcan Salute",
  "👌": "OK Hand",
  "🤏": "Pinching Hand",
  "✌️": "Victory Hand",
  "🤞": "Crossed Fingers",
  "🤟": "Love-You Gesture",
  "🤘": "Sign of the Horns",
  "🤙": "Call Me Hand",
  "👍": "Thumbs Up",
  "👎": "Thumbs Down",
  "✊": "Raised Fist",
  "👊": "Oncoming Fist",
  "👏": "Clapping Hands",
  "🙌": "Raising Hands",
  "👐": "Open Hands",
  "🤲": "Palms Up Together",
  "🤝": "Handshake",
  "🙏": "Folded Hands",
  "💪": "Flexed Biceps"
};

var emojiWeKnow = Object.keys(emojiDictionary);
//console.log(emojiWeKnow);

export default function App() {
  const [inputEmoji, setInputEmoji] = useState("");
  const [outputEmoji, setOutputEmoji] = useState("");

  function inputEmojiHandler(event) {
    var inputEmoji = event.target.value;
    if (inputEmoji in emojiDictionary) {
      setOutputEmoji(emojiDictionary[inputEmoji]);
      setInputEmoji(inputEmoji);
    } else {
      setInputEmoji("Sorry! Not found in Database");
    }
  }

  function selectEmoji(emoji) {
    console.log(emoji);
    setOutputEmoji(emojiDictionary[emoji]);
    setInputEmoji(emoji);
  }

  return (
    <div className="App">
      <div className="block">
        <div className="header">
          <center>
            <h1> hands-emoji-pedia</h1>
          </center>
        </div>
        <div>
          <h4 style={{ color: "black" }}>
            Don't know what hand emoji it is? Search or select below in
            hands-emoji-pedia
          </h4>
          <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/whatsapp/273/thinking-face_1f914.png" />
        </div>
        <div>
          <center>
            <input
              onChange={inputEmojiHandler}
              placeholder="Enter Emoji to Search.."
            ></input>
          </center>
          <span className="meaningOutput">
            <h3 style={{ padding: "0rem" }}>
              {inputEmoji} {outputEmoji}
            </h3>
          </span>

          <div style={{ padding: "0.5rem 1rem" }}>
            <h3 style={{ color: "#888888" }}>Here are emojis we know</h3>
            {emojiWeKnow.map((emoji) => {
              return (
                <li
                  key={emoji}
                  style={{
                    display: "inline",
                    fontSize: "2rem",
                    padding: "0.5rem",
                    cursor: "pointer"
                  }}
                  onClick={() => selectEmoji(emoji)}
                >
                  {emoji}
                </li>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
