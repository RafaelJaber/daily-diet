import { useEffect, useState } from "react";
import { TouchableOpacityProps } from "react-native";

import {
  ArrowIcon,
  CardStyleProps,
  Container,
  Percent,
  SubText,
} from "./styles";

type CardSummaryProps = TouchableOpacityProps & {
  percent: number;
  minimalPercent: number;
};

export function CardSummary({
  percent,
  minimalPercent,
  ...rest
}: CardSummaryProps) {
  const [cardType, setCardType] = useState<CardStyleProps>("SUCCESS");

  useEffect(() => {
    if (percent >= minimalPercent) {
      setCardType("SUCCESS");
    } else {
      setCardType("FAILURE");
    }
  }, [percent, minimalPercent]);

  return (
    <Container type={cardType} {...rest}>
      <ArrowIcon type={cardType} />
      <Percent>
        {percent.toLocaleString("pt-br", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}
        %
      </Percent>
      <SubText>das refeições dentro da dieta</SubText>
    </Container>
  );
}
