import styled from "@emotion/styled";

export const TomatoWrapper = styled.div`
  padding: 2rem;
  color: #333;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const TomatoSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 3rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const TomatoCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 280px;
  height: 280px;
  background-color: #fff;
  border-bottom: 1px solid black;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  border-radius: 10px;
  margin-bottom: 0.5vh;
  padding: 2rem;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    margin-bottom: 2rem;
  }
`;

export const TomatoName = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

export const TomatoImage = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 1rem;
`;

export const TomatoDescription = styled.p`
  text-align: center;
`;
