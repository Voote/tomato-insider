import React from "react";
import { categories } from "../../api/categories";
import {
  Wrapper,
  CategoryCard,
  CategoryTitle,
  CategorySection,
  CategoryDescription,
  StyledParagraph,
} from "./landingPagestyles";

const LandingPage = () => (
  <Wrapper>
    <StyledParagraph>
      Tomatoes are a delicious fruit that are used in many cuisines around the
      world. They are a good source of vitamins and antioxidants.
    </StyledParagraph>
    <CategorySection>
      {categories.map((category, index) => (
        <CategoryCard key={index}>
          <CategoryTitle>{category.title}</CategoryTitle>
          <CategoryDescription>{category.description}</CategoryDescription>
        </CategoryCard>
      ))}
    </CategorySection>
  </Wrapper>
);

export default LandingPage;
