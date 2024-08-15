import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import {
  default as enTranslation,
  default as ptTranslation,
} from "./locales/ptTranslate.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslation },
    pt: { translation: ptTranslation },
  },
  lng: "pt", // Idioma padrão
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
