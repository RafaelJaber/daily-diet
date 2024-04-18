import { Container, SubText, ValueText } from "./styles";

type StatisticsTextCardProps = {
  value: number;
  text: string;
};

export function StatisticsTextCard({ value, text }: StatisticsTextCardProps) {
  return (
    <Container>
      <ValueText>{value}</ValueText>
      <SubText>{text}</SubText>
    </Container>
  );
}
