import styled from "@emotion/styled";

export const FooterWrapper = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #333333;
  color: #ffffff;
  height: 80px;
  margin-top: auto;
`;

export const FooterText = styled.p`
  font-size: 0.9rem;
  margin: 0;
`;

export const FooterLink = styled.a`
  font-size: 0.9rem;
  color: #ffffff;
  text-decoration: underline;

  &:hover {
    color: #e6e6e6;
  }
`;
