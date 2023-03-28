import { useState } from "react";
import { ThemeProvider, Global } from "@emotion/react";
import { theme, globalStyles } from "./assets/theme";
import { LabelsContext } from "./LabelsContext";
import Logo from "./components/headers/Logo";
import Footer from "./components/Footer/Footer";
import LandingPage from "./components/landing/LandingPage";
import TomatoeSpieces from "./components/sections/Spieces/Spieces";
import Categories from "./components/sections/Categories/Categories";
import LanguageSelector from "./components/LanguageSelector/LanguageSelector";
import labels_en from "./assets/labels/labelsEng";
import labels_es from "./assets/labels/labelsEsp";

const App = () => {
  const [language, setLanguage] = useState("en");

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const currentLabels = language === "en" ? labels_en : labels_es;

  return (
    <ThemeProvider theme={theme}>
      <LabelsContext.Provider value={currentLabels}>
        <LanguageSelector
          language={language}
          onLanguageChange={handleLanguageChange}
        />
        <Global styles={globalStyles} />
        <Logo />
        <LandingPage />
        <Categories />
        <TomatoeSpieces />
        <Footer />
      </LabelsContext.Provider>
    </ThemeProvider>
  );
};

export default App;
