import styled from "@emotion/styled";

// Wrapper for the entire landing page
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  min-height: 50vh;
  margin-bottom: 2rem;
  background-color: #e8f0d9;

  @media (prefers-color-scheme: dark) {
    background-color: #c5e1a5;
  }
`;

// Section for displaying the different categories of tomatoes
export const SectionWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 4vw 1vw;
`;

// Card for displaying a category of tomatoes
export const SectionCard = styled.div`
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

// Title for a category card
export const SectionTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 1rem;
  text-align: center;
  color: #333;
`;

// Description for a category card
export const SectionDescription = styled.p`
  font-size: 1rem;
  font-weight: 400;
  text-align: center;
  color: #666;
`;