import styled from "@emotion/styled";

export const LanguageSelectorWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 10px;
  align-items: center;
`;

export const LanguageRadio = styled.input`
  display: none;
`;

export const LanguageLabel = styled.label`
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