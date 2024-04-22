import { format } from "date-fns";
import { TouchableOpacityProps } from "react-native";

import { SnackModel } from "@/models/snack.model";

import { CircleIcon, Container, DateHour, Divider, SnackName } from "./styles";

type ItemListProps = TouchableOpacityProps & {
  snack: SnackModel;
};
export function ItemListComponent({ snack, ...rest }: ItemListProps) {
  return (
    <Container {...rest}>
      <DateHour>{format(snack.date, "HH:mm")}</DateHour>
      <Divider />
      <SnackName>{snack.name} </SnackName>
      <CircleIcon type={snack.withinTheDiet ? "INCLUDED" : "EXCLUDED"} />
    </Container>
  );
}
