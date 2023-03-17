import React from "react";
import {
  Wrapper,
  Heading,
  Subheading,
  CategorySection,
  CategoryCard,
  CategoryTitle,
  CategoryDescription,
} from "./landingPagestyles";

const categories = [
  {
    title: "Color",
    description:
      "Explore the different colors of tomatoes, from bright red to deep purple.",
  },
  {
    title: "Shape",
    description:
      "Discover the variety of shapes that tomatoes come in, from round to pear-shaped.",
  },
  {
    title: "Size",
    description:
      "Learn about the different sizes of tomatoes, from small cherry tomatoes to large beefsteak tomatoes.",
  },
];

function LandingPage() {
  return (
    <Wrapper>
      <Heading>Welcome to Tomatoes.com</Heading>
      <Subheading>Explore the World of Tomatoes</Subheading>
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
}

export default LandingPage;
