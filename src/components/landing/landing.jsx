import React from "react";
import { categories } from "../../api/categories";
import { HoverableCategoryCard } from "./HoverableCategoryCard";
import {
  Wrapper,
  CategoryTitle,
  CategorySection,
  CategoryDescription,
  StyledParagraph,
} from "./LandingPagestyles.styles";

const LandingPage = () => (
  <Wrapper>
    <StyledParagraph>
      Tomatoes are a delicious fruit that are used in many cuisines around the
      world. They are a good source of vitamins and antioxidants.
    </StyledParagraph>
    <CategorySection>
      {categories.map((category, index) => (
        <HoverableCategoryCard key={index}>
          <CategoryTitle>{category.title}</CategoryTitle>
          <CategoryDescription>{category.description}</CategoryDescription>
          <CategoryDescription className="text-area">
            {category.extra}
          </CategoryDescription>
        </HoverableCategoryCard>
      ))}
    </CategorySection>
  </Wrapper>
);
