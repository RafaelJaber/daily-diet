import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacityProps } from "react-native";

import { ButtonComponentStyle, Container, Icon, Text } from "./styles";

type ButtonComponentProps = TouchableOpacityProps & {
  text: string;
  type?: ButtonComponentStyle;
  icon?: keyof typeof MaterialIcons.glyphMap;
};

export function ButtonComponent({
  text,
  type = "PRIMARY",
  icon,
  ...rest
}: ButtonComponentProps) {
  return (
    <Container {...rest} type={type}>
      {icon && <Icon name={icon} type={type} />}
      <Text type={type}>{text}</Text>
    </Container>
  );
}
