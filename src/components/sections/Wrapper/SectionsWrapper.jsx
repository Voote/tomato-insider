import {
  Card,
  CardTitle,
  CardsContainer,
  CardDescription,
  SectionsContainer,
} from "./SectionsWrapper.styles";

const SectionsWrapper = ({ title, data }) => (
  <SectionsContainer>
  <CardTitle big>{title}</CardTitle>
    <CardsContainer>
      {data.map((category, index) => (
        <Card key={index}>
          <CardTitle>{category.title}</CardTitle>
          <CardDescription>{category.description}</CardDescription>
          <CardDescription className="text-area">
            <p>{category.description}</p>
            <p>{category.extra}</p>
            <p className="examples">{category.examples.join(", ")}</p>
          </CardDescription>
        </Card>
      ))}
    </CardsContainer>
  </SectionsContainer>
);

export default SectionsWrapper;
