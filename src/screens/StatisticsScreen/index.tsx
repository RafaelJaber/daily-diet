import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useEffect, useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { CardStyleProps } from "@/components/CardSummary/styles";
import { StatisticsHeaderComponent } from "@/components/StatisticsHeaderComponent";
import { StatisticsItemCard } from "@/components/StatisticsItemCard";
import { StatisticsTextCard } from "@/components/StatisticsTextCard";
import { SnackListModel } from "@/models/snack-list.model";
import { getSnakeCollection, getUserEntry } from "@/services/snakeService";

import { AreaView, CardContainer, Container, ContainerHeader } from "./styles";

export function StatisticsScreen() {
  const insets = useSafeAreaInsets();

  const [cardType, setCardType] = useState<CardStyleProps>("SUCCESS");
  const [snakeList, setSnackList] = useState<SnackListModel[]>([]);
  const [metric, setMetric] = useState(0);

  function loadSnakes() {
    getSnakeCollection().then((result) => {
      setSnackList(result);
    });
  }

  function loadMetric() {
    getUserEntry().then((result) => {
      setMetric(result.metrics);
    });
  }

  function getUserStatics() {
    let withinTheDietCount = 0;
    let notInTheDietCount = 0;
    let totalItens = 0;
    snakeList.forEach((item) => {
      item.data.forEach((element) => {
        if (element.withinTheDiet) withinTheDietCount++;
        if (!element.withinTheDiet) notInTheDietCount++;
        totalItens++;
      });
    });
    const percent = Math.round((withinTheDietCount / totalItens) * 100);
    return {
      percent,
      withinTheDietCount,
      totalItens,
      notInTheDietCount,
    };
  }

  useFocusEffect(
    useCallback(() => {
      loadSnakes();
      loadMetric();
    }, []),
  );

  useEffect(() => {
    if (getUserStatics().percent >= metric) {
      setCardType("SUCCESS");
    } else {
      setCardType("FAILURE");
    }
  }, [getUserStatics, metric]);

  return (
    <AreaView>
      <StatisticsHeaderComponent
        value={getUserStatics().percent}
        type={cardType}
      />
      <Container
        style={{
          paddingBottom: insets.bottom,
        }}
      >
        <ContainerHeader>Estatísticas gerais</ContainerHeader>

        <StatisticsTextCard
          value={getUserStatics().withinTheDietCount}
          text="melhor sequência de pratos dentro da dieta"
        />
        <StatisticsTextCard
          value={getUserStatics().totalItens}
          text="refeições registradas"
        />

        <CardContainer>
          <StatisticsItemCard
            type={"SUCCESS"}
            value={getUserStatics().withinTheDietCount}
            text={"refeições dentro da dieta"}
          />
          <StatisticsItemCard
            type={"FAILURE"}
            value={getUserStatics().notInTheDietCount}
            text={"refeições fora da dieta"}
          />
        </CardContainer>
      </Container>
    </AreaView>
  );
}
