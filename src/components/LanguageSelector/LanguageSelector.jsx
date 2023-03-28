import {
  LanguageLabel,
  LanguageRadio,
  LanguageSelectorWrapper,
} from "./LanguageSelector.styles";

const LanguageSelector = ({ language, onLanguageChange }) => {
  const handleChange = (event) => {
    onLanguageChange(event);
  };

  return (
    <LanguageSelectorWrapper>
      <LanguageLabel htmlFor="en" active={language === "en"}>
        <LanguageRadio
          type="radio"
          id="en"
          name="language"
          value="en"
          checked={language === "en"}
          onChange={handleChange}
        />
        EN
      </LanguageLabel>

      <LanguageLabel htmlFor="es" active={language === "es"}>
        <LanguageRadio
          type="radio"
          id="es"
          name="language"
          value="es"
          checked={language === "es"}
          onChange={handleChange}
        />
        ES
      </LanguageLabel>

      <LanguageLabel htmlFor="pl" active={language === "pl"}>
        <LanguageRadio
          id="pl"
          value="pl"
          type="radio"
          name="language"
          checked={language === "pl"}
          onChange={handleChange}
        />
        PL
      </LanguageLabel>
    </LanguageSelectorWrapper>
  );
};

export default LanguageSelector;
