import styled from "@emotion/styled";

export const SectionsContainer  = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  min-height: 50vh;
  margin-bottom: 2rem;
  background-color: ${({ theme }) => theme.palette.background.light};

  @media (prefers-color-scheme: dark) {
    background-color: ${({ theme }) => theme.palette.background.main};
  }
`;

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 1rem;
  margin: 4vw 1vw;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const SectionCard  = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 270px;
  height: 270px;
  background-color: #fff;
  border-bottom: 2px solid green;
  box-shadow: 5px 5px 14px rgba(0, 0, 0, 0.16);
  border-radius: 10px;
  margin-bottom: 0.5vh;
  padding: 4vh;
  transition: all 0.3s ease-in-out;

  .text-area {
    visibility: hidden;
    opacity: 0;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 1rem;
    box-sizing: border-box;
    background-color: #fff;
    border-radius: 0 0 10px 10px;
    transition: visibility 0s, opacity 0.3s ease-in-out;
  }

  &:hover {
    transform: translateY(-5px);
  }

  &:hover .text-area {
    visibility: visible;
    opacity: 1;
  }
`;

export const CardTitle = styled.h3`
  font-size: ${({ big }) => (big ? "2rem" : "1.5rem")};
  font-weight: 500;
  margin-bottom: 1rem;
  text-align: center;
  color: ${({ theme }) => theme.palette.secondary.main};
`;

export const CardDescription = styled.div`
  font-size: 1rem;
  font-weight: 400;
  text-align: center;
  color: ${({ theme }) => theme.palette.text.secondary};

  .examples {
    color: ${({ theme }) => theme.palette.text.primary};
    background-color: ${({ theme }) => theme.palette.background.main};
    padding: 1rem;
    border-radius: 10px;
  }
`;

export const GrayedOutCard = styled(SectionCard)`
/* background: linear-gradient(to bottom, #4CAF50 10%, #F44336 80%); */
opacity: 0.5;
pointer-events: none;
`;
