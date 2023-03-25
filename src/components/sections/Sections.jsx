import { categories } from "../../api/categories";
import {
  Wrapper,
  SectionCard,
  SectionTitle,
  SectionWrapper,
  SectionDescription,
} from "./Sections.styles";

const Sections = () => (
  <Wrapper>
    <SectionWrapper>
      {categories.map((category, index) => (
        <SectionCard key={index}>
          <SectionTitle>{category.title}</SectionTitle>
          <SectionDescription>{category.description}</SectionDescription>
          <SectionDescription className="text-area">
            {category.description}
            {category.extra}
          </SectionDescription>
        </SectionCard>
      ))}
    </SectionWrapper>
  </Wrapper>
);

export default Sections;
