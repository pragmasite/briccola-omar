import { createContext, useContext, ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { translations, Language } from "@/lib/translations";

interface LanguageContextType {
  lang: Language;
  t: typeof translations.it;
  otherLang: Language;
  otherLangPath: string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const location = useLocation();

  // Determine language from URL path - Italian is primary, others are secondary
  let lang: Language = "it";
  if (location.pathname.startsWith("/de")) {
    lang = "de";
  } else if (location.pathname.startsWith("/en")) {
    lang = "en";
  }

  const t = translations[lang];

  // Determine other language for switcher
  let otherLang: Language;
  let otherLangPath: string;

  if (lang === "it") {
    otherLang = "de";
    otherLangPath = "/de";
  } else if (lang === "de") {
    otherLang = "en";
    otherLangPath = "/en";
  } else {
    otherLang = "it";
    otherLangPath = "/";
  }

  return (
    <LanguageContext.Provider value={{ lang, t, otherLang, otherLangPath }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};
