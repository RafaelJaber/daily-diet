import { format } from "date-fns";

import { SnackModel } from "@/models/snack.model";

import { CircleIcon, Container, DateHour, Divider, SnackName } from "./styles";

type ItemListProps = {
  snack: SnackModel;
};

export function ItemListComponent({ snack }: ItemListProps) {
  return (
    <Container>
      <DateHour>{format(snack.date, "HH:mm")}</DateHour>
      <Divider />
      <SnackName>{snack.name} </SnackName>
      <CircleIcon type={snack.withinTheDiet ? "INCLUDED" : "EXCLUDED"} />
    </Container>
  );
}
