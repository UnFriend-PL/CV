"use client";
import { useLangContext } from "@/app/services/context";
import "./lang.css";
import Image from "next/image";

function SelectLanguage() {
  const { lang, setLang } = useLangContext();
  return (
    <div className="LangWrap">
      {lang == "eng" ? (
        <Image
          width={24}
          height={24}
          src="./img/pl.png"
          onClick={() => setLang("pl")}
        />
      ) : (
        <Image
          width={24}
          height={24}
          src="./img/uk.png"
          onClick={() => setLang("eng")}
        />
      )}
    </div>
  );
}

export default SelectLanguage;
