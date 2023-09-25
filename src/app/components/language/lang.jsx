"use client";
import { useLangContext } from "@/app/services/context";
import "./lang.css";

function SelectLanguage() {
  const { lang, setLang } = useLangContext();
  return (
    <div className="LangWrap">
      {lang == "eng" ? (
        <img src="./img/pl.png" onClick={() => setLang("pl")} />
      ) : (
        <img src="./img/uk.png" onClick={() => setLang("eng")} />
      )}
    </div>
  );
}

export default SelectLanguage;
