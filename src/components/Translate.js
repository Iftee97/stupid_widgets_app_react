import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";

function Translate() {
  const options = [
    {
      label: "Afrikaans",
      value: "af",
    },
    {
      label: "Arabic",
      value: "ar",
    },
    {
      label: "Hindi",
      value: "hi",
    },
  ];

  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState("");

  return (
    <div className="ui container">
      <div className="ui form">
        <div className="field">
          <label htmlFor="">Enter Text</label>
          <input
            type="text"
            placeholder="enter text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
      </div>

      <Dropdown
        label="Select a language"
        options={options}
        selected={language}
        onSelectedChange={setLanguage}
      />

      <br />
      <hr />

      <h3 className="ui header">Output</h3>
      <Convert language={language} text={text} />
    </div>
  );
}

export default Translate;

// google translate api key: AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM
// google translate api is paid, so it'll only work on localhost:3000
