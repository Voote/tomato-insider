import {
  Wrapper,
  SectionCard,
  SectionTitle,
  SectionWrapper,
  SectionDescription,
} from "./SectionsWrapper.styles";

const SectionsWrapper = ({ title, data }) => (
  <Wrapper>
  <SectionTitle>{title}</SectionTitle>
    <SectionWrapper>
      {data.map((category, index) => (
        <SectionCard key={index}>
          <SectionTitle>{category.title}</SectionTitle>
          <SectionDescription>{category.description}</SectionDescription>
          <SectionDescription className="text-area">
            <p>{category.description}</p>
            <p>{category.extra}</p>
            <p className="examples">{category.examples.join(", ")}</p>
          </SectionDescription>
        </SectionCard>
      ))}
    </SectionWrapper>
  </Wrapper>
);

export default SectionsWrapper;
