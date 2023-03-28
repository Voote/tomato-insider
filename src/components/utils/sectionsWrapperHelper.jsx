import { CardTitle, GrayedOutCard } from "../sections/Wrapper/SectionsWrapper.styles";

export const generateGrayedOutCards = (count) => {
  const countLength = (3 - count % 3) % 3;
  const grayedOutCards = [];
  for (let i = 0; i < countLength; i++) {
    grayedOutCards.push(
      <GrayedOutCard key={`grayed-out-${i}`}>
        <CardTitle><img src="/tomato.svg" alt="Tomato" /></CardTitle>
        {/* <CardTitle>🍅</CardTitle> */}
      </GrayedOutCard>
    );
  }
  return grayedOutCards;
};
