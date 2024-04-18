import { CardStyleProps, Container, TextBold, TextRegular } from "./styles";

type StatisticsItemCardProps = {
  value: number;
  text: string;
  type: CardStyleProps;
};

export function StatisticsItemCard({
  value,
  text,
  type,
}: StatisticsItemCardProps) {
  return (
    <Container type={type}>
      <TextBold>{value}</TextBold>
      <TextRegular>{text}</TextRegular>
    </Container>
  );
}
