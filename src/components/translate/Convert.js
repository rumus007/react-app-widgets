import React, { useEffect, useState } from "react";
import axios from "axios";

const translateKey = "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM";

const Convert = ({ language, text }) => {
  const [translated, setTranslated] = useState("");
  const [debouceText, setDebounceText] = useState(text);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebounceText(text);
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [text]);

  useEffect(() => {
    const translation = async () => {
      const { data } = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: debouceText,
            target: language.value,
            key: translateKey,
          },
        }
      );

      setTranslated(data.data.translations[0].translatedText);
    };

    translation();
  }, [language, debouceText]);

  return (
    <div>
      <h1 className="ui header">{translated}</h1>
    </div>
  );
};

export default Convert;
