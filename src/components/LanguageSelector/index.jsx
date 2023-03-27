import styled from "@emotion/styled";

const LanguageSelectorWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 10px;
  align-items: center;
`;

const LanguageRadio = styled.input`
  display: none;
`;

const LanguageLabel = styled.label`
  font-size: 1rem;
  color: ${({ theme, active }) =>
    active ? theme.palette.primary.contrastText : theme.palette.secondary.main};
  margin-right: 10px;
  cursor: pointer;
  padding: 5px 10px;
  border: ${({ theme, active }) =>
    active ? `1px solid ${theme.palette.primary.main}` : "none"};
  background-color: ${({ theme, active }) =>
    active ? theme.palette.primary.main : "transparent"};
  border-radius: 5px;
`;

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
          type="radio"
          id="pl"
          name="language"
          value="pl"
          checked={language === "pl"}
          onChange={handleChange}
        />
        PL
      </LanguageLabel>
    </LanguageSelectorWrapper>
  );
};

export default LanguageSelector;
