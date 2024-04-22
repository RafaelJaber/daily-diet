import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { format } from "date-fns";
import { useCallback, useState } from "react";
import { SectionList } from "react-native";

import { ButtonComponent } from "@/components/ButtonComponent";
import { CardSummary } from "@/components/CardSummary";
import { HeaderComponent } from "@/components/HeaderComponent";
import { ItemListComponent } from "@/components/ItemListComponent";
import { SnackListModel } from "@/models/snack-list.model";
import {
  getSnack,
  getSnakeCollection,
  getUserEntry,
} from "@/services/snakeService";

import { AreaView, Container, ListHeader, TextMD } from "./styles";

export function HomeScreen() {
  const navigation = useNavigation();

  const [snakeList, setSnackList] = useState<SnackListModel[]>([]);
  const [metric, setMetric] = useState(0);

  function handleNavigateToStatistics() {
    navigation.navigate("statistics");
  }

  function handleNavigateToNewSnack() {
    navigation.navigate("new");
  }

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

  function handleItemListPressNavigate(id: string) {
    navigation.navigate("snackDetails", { id });
  }

  function getPercent() {
    let withinTheDietCount = 0;
    let totalItens = 0;
    snakeList.forEach((item) => {
      item.data.forEach((element) => {
        if (element.withinTheDiet) withinTheDietCount++;
        totalItens++;
      });
    });
    return Math.round((withinTheDietCount / totalItens) * 100);
  }

  useFocusEffect(
    useCallback(() => {
      loadSnakes();
      loadMetric();
    }, []),
  );

  return (
    <AreaView>
      <HeaderComponent />
      <Container>
        <CardSummary
          percent={getPercent()}
          minimalPercent={metric}
          onPress={handleNavigateToStatistics}
        />

        <TextMD>Refeições</TextMD>
        <ButtonComponent
          text="Nova refeição"
          icon={"add"}
          onPress={handleNavigateToNewSnack}
        />

        <SectionList
          sections={snakeList}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <ItemListComponent
              snack={item}
              onPress={() => handleItemListPressNavigate(item.id)}
            />
          )}
          renderSectionHeader={({ section: { date } }) => (
            <ListHeader>{format(date, "dd.MM.yy")}</ListHeader>
          )}
        />
      </Container>
    </AreaView>
  );
}
