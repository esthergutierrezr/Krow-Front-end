import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import Backend from "i18next-xhr-backend";
import LanguageDetector from 'i18next-browser-languagedetector';
// do not like using this?
// have a look at the Quick start guide
// for passing in lng and translations on init
i18n
  // learn more: https://github.com/i18next/i18next-xhr-backend
  .use(Backend)
  // connect with React
  .use(initReactI18next)
  // for all options read: https://www.i18next.com/overview/configuration-options
    // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  .init({
    debug: false,

    // lng: "pt",
    fallbackLng: "pt",
    whitelist: ["pt", "en"],

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    backend: {
      loadPath: `/locales/{{lng}}/{{ns}}.json`,
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;