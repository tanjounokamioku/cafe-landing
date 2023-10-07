// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en/translation.json";
import pt from "./locales/pt/translation.json";
import jp from "./locales/jp/translation.json";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      pt: { translation: pt },
      jp: { translation: jp }
    },
    lng: "pt",
    fallbackLng: "pt",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
