import styled from "@emotion/styled";

export const FooterWrapper = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #333;
  color: #fff;
  height: 80px;
  margin-top: auto;
`;

export const FooterText = styled.p`
  font-size: 0.9rem;
  margin: 0;
`;

export const FooterLink = styled.a`
  font-size: 0.9rem;
  color: #fff;
  text-decoration: underline;

  &:hover {
    color: #e6e6e6;
  }
`;
