import { useState } from "react";
import { ThemeProvider, Global } from "@emotion/react";
import { theme, globalStyles } from "./assets/theme";
import { languageLabels } from "./components/utils/languageConfig";
import { LabelsContext } from "./LabelsContext";
import Logo from "./components/headers/Logo";
import Footer from "./components/Footer/Footer";
import Categories from "./components/sections/Categories/Categories";
import LandingPage from "./components/landing/LandingPage";
import TomatoeSpieces from "./components/sections/Spieces/Spieces";
import LanguageSelector from "./components/LanguageSelector/LanguageSelector";

const App = () => {
  const [language, setLanguage] = useState("en");

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const currentLabels = languageLabels[language];

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
