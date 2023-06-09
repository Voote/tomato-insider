import styled from "@emotion/styled";

export const LandingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  padding: 2rem;
  border-radius: 10px;
  margin-bottom: 3rem;
  background: linear-gradient(120deg, #f4cccc 0%, #c84630 100%);
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  
  @media (prefers-color-scheme: dark) {
    background: linear-gradient(120deg, #212121 0%, #8b0000 100%);
    color: #ffffff;
    box-shadow: 0px 3px 6px rgba(255, 255, 255, 0.16);
  }

  @media (max-width: 768px) {
    padding: 1rem;
    margin-bottom: 2rem;
  }
`;

export const LandingTitle = styled.h2`
  font-size: 3rem;
  font-weight: 600;
  margin-bottom: 1rem;
  text-align: center;
  color: #2e7d32;

  @media (prefers-color-scheme: dark) {
    color: #e55;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }
`;

export const LandingDescription = styled.p`
  font-size: 1.5rem;
  font-weight: 400;
  text-align: center;
  margin-bottom: 2rem;
  color: #5c5c5c;

  @media (prefers-color-scheme: dark) {
    color: #bdbdbd;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }
`;
