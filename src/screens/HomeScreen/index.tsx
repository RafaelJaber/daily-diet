import { format } from "date-fns";
import { SectionList } from "react-native";

import { ButtonComponent } from "@/components/ButtonComponent";
import { CardSummary } from "@/components/CardSummary";
import { HeaderComponent } from "@/components/HeaderComponent";
import { ItemListComponent } from "@/components/ItemListComponent";
import { SnackListModel } from "@/models/snack-list.model";

import { AreaView, Container, ListHeader, TextMD } from "./styles";

const listMock: SnackListModel[] = [
  {
    date: new Date(),
    data: [
      {
        name: "Sanduiche",
        description: "Sanduiche cabuloso",
        withinTheDiet: false,
        date: new Date(),
      },
      {
        name: "Sorvete",
        description: "Sorvete cabuloso",
        withinTheDiet: true,
        date: new Date(),
      },
    ],
  },
];

export function HomeScreen() {
  return (
    <AreaView>
      <HeaderComponent />
      <Container>
        <CardSummary percent={80.8} minimalPercent={80.9} />

        <TextMD>Refeições</TextMD>
        <ButtonComponent text="Nova refeição" icon={"add"} />

        <SectionList
          sections={listMock}
          keyExtractor={(item, index) => item.name + index}
          renderItem={({ item }) => <ItemListComponent snack={item} />}
          renderSectionHeader={({ section: { date } }) => (
            <ListHeader>{format(date, "dd.MM.yy")}</ListHeader>
          )}
        />
      </Container>
    </AreaView>
  );
}
