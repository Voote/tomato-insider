import { lang } from "../utils/languageConfig";
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
      {lang.map(({ code, label }) => (
        <LanguageLabel htmlFor={code} active={language === code} key={code}>
          <LanguageRadio
            type="radio"
            id={code}
            name="language"
            value={code}
            checked={language === code}
            onChange={handleChange}
          />
          {label}
        </LanguageLabel>
      ))}
    </LanguageSelectorWrapper>
  );
};

export default LanguageSelector;
