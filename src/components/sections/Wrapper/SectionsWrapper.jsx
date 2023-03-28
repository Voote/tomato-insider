import { generateGrayedOutCards } from "../../utils/sectionsWrapperHelper";
import {
  CardTitle,
  SectionCard,
  CardsContainer,
  CardDescription,
  SectionsContainer,
} from "./SectionsWrapper.styles";

const SectionsWrapper = ({ title, data }) => (
  <SectionsContainer>
  <CardTitle big>{title}</CardTitle>
    <CardsContainer>
      {data.map((category, index) => (
        <SectionCard key={index}  data-testid="section-card">
          <CardTitle>{category.title}</CardTitle>
          <CardDescription>{category.description}</CardDescription>
          <CardDescription className="text-area">
            <p>{category.description}</p>
            <p>{category.extra}</p>
            <p className="examples">{category.examples.join(", ")}</p>
          </CardDescription>
        </SectionCard>
      ))}
      {generateGrayedOutCards(data.length)}
    </CardsContainer>
  </SectionsContainer>
);

export default SectionsWrapper;
