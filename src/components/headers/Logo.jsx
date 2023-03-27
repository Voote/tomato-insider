import styled from "@emotion/styled";

const LogoHeader = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 2rem;
  line-height: 1.1;
  color: #ffd600;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    font-size: 3rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const Logo = () => <LogoHeader>Tomatoes Insider</LogoHeader>;

export default Logo;
