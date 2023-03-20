import styled from "@emotion/styled";

// Wrapper for the entire landing page
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  min-height: 50vh;
  background-color: #f5f5f5;
`;

// Heading for the landing page
export const Heading = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 2rem;
  line-height: 1.1;
  color: #bb0;
`;

// Subheading for the landing page
export const Subheading = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
  color: #e55;
`;

export const StyledParagraph = styled.p`
  margin-top: 2rem;
  color: #a04;
`;

// Section for displaying the different categories of tomatoes
export const CategorySection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
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
  background-color: #fff;
  border-bottom: 1px solid black;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  border-radius: 10px;
  margin-bottom: 0.5vh;
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
  color: #333;
`;

// Description for a category card
export const CategoryDescription = styled.p`
  font-size: 1rem;
  font-weight: 400;
  text-align: center;
  color: #666;
`;
