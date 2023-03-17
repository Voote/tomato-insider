import styled from "@emotion/styled";

// Wrapper for the entire landing page
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 50vh;
  background-color: #f5f5f5;
`;

// Heading for the landing page
export const Heading = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 2rem;
  color: #bb0;
`;

// Subheading for the landing page
export const Subheading = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
  color: #ee5555;
`;

export const StyledParagraph = styled.p`
  margin-top: 2rem;
  color: #a04;
`;

// Section for displaying the different categories of tomatoes
export const CategorySection = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  /* max-width: 1200px; */
  margin: 4vw 1vw;
`;

// Card for displaying a category of tomatoes
export const CategoryCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 280px;
  height: 280px;
  background-color: #ffffff;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  border-radius: 10px;
  padding: 2rem;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }
`;

// Title for a category card
export const CategoryTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 1rem;
  text-align: center;
  color: #333333;
`;

// Description for a category card
export const CategoryDescription = styled.p`
  font-size: 1rem;
  font-weight: 400;
  text-align: center;
  color: #666666;
`;
