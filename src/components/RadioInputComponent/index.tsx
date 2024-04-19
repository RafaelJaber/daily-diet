import { TouchableOpacityProps } from "react-native";

import { CircleIcon, ColorIconProps, Container, Label } from "./styles";

type RadioInputComponentProps = TouchableOpacityProps & {
  label: string;
  color: ColorIconProps;
  value: string;
  control: string;
};

export function RadioInputComponent({
  label,
  color,
  value,
  control,
  ...rest
}: RadioInputComponentProps) {
  return (
    <Container selected={value === control} color={color} {...rest}>
      <CircleIcon color={color} />
      <Label>{label}</Label>
    </Container>
  );
}
