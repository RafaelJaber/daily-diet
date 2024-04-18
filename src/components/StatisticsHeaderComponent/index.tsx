import { useNavigation } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import {
  BackIcon,
  CardStyleProps,
  Container,
  Percent,
  SubText,
  ViewHeaderInformation,
  ViewIconBack,
} from "./styles";

type StatisticsHeaderComponentProps = {
  value: number;
  type: CardStyleProps;
};

export function StatisticsHeaderComponent({
  value,
  type,
}: StatisticsHeaderComponentProps) {
  const navigation = useNavigation();

  const insets = useSafeAreaInsets();

  function handleNavigationToHome() {
    navigation.navigate("home");
  }

  return (
    <Container
      type={type}
      style={{
        paddingTop: insets.top,
      }}
    >
      <ViewIconBack onPress={handleNavigationToHome}>
        <BackIcon type={type} />
      </ViewIconBack>
      <ViewHeaderInformation>
        <Percent>
          {value.toLocaleString("pt-br", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
          %
        </Percent>
        <SubText>das refeições dentro da dieta</SubText>
      </ViewHeaderInformation>
    </Container>
  );
}
