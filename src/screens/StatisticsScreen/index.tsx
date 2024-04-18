import { useSafeAreaInsets } from "react-native-safe-area-context";

import { StatisticsHeaderComponent } from "@/components/StatisticsHeaderComponent";
import { StatisticsItemCard } from "@/components/StatisticsItemCard";
import { StatisticsTextCard } from "@/components/StatisticsTextCard";

import { AreaView, CardContainer, Container, ContainerHeader } from "./styles";

export function StatisticsScreen() {
  const insets = useSafeAreaInsets();

  return (
    <AreaView>
      <StatisticsHeaderComponent value={80.59} type={"FAILURE"} />
      <Container
        style={{
          paddingBottom: insets.bottom,
        }}
      >
        <ContainerHeader>Estatísticas gerais</ContainerHeader>

        <StatisticsTextCard
          value={22}
          text="melhor sequência de pratos dentro da dieta"
        />
        <StatisticsTextCard value={109} text="refeições registradas" />

        <CardContainer>
          <StatisticsItemCard
            type={"SUCCESS"}
            value={99}
            text={"refeições dentro da dieta"}
          />
          <StatisticsItemCard
            type={"FAILURE"}
            value={10}
            text={"refeições fora da dieta"}
          />
        </CardContainer>
      </Container>
    </AreaView>
  );
}
