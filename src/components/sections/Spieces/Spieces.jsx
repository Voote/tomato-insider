import { tomatoSpieces } from "../../../api/spieces";
import {
  TomatoCard,
  TomatoDescription,
  TomatoImage,
  TomatoName,
  TomatoSection,
  TomatoWrapper,
} from "./Spieces.styles";

const TomatoeSpieces = () => (
  <TomatoWrapper>
    <TomatoSection>
      {tomatoSpieces.map((tomato) => (
        <TomatoCard key={tomato.id}>
          <TomatoName>{tomato.name}</TomatoName>
          <TomatoImage src={tomato.image} alt={tomato.name} />
          <TomatoDescription>{tomato.description}</TomatoDescription>
        </TomatoCard>
      ))}
    </TomatoSection>
  </TomatoWrapper>
);

export default TomatoeSpieces;
