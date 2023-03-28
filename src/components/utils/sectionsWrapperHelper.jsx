import { CardTitle, GrayedOutCard } from "../sections/Wrapper/SectionsWrapper.styles";

export const generateGrayedOutCards = (count) => {
  const countLength = (3 - count % 3) % 3;

  return [...Array(countLength)].map((value, index) => (
    <GrayedOutCard key={`grayed-out-${index}`}>
      <CardTitle>
        <img src="/tomato.svg" alt="Tomato" />
      </CardTitle>
    </GrayedOutCard>
  ));
};
