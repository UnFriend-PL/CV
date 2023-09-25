"use client";
import { createContext, useContext, useState } from "react";

const LangContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("en");

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLangContext() {
  return useContext(LangContext);
}
