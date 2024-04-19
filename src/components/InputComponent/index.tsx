import { TextInputProps } from "react-native";

import { Container, Input, InputLabel } from "./styles";

type InputComponentProps = TextInputProps & {
  label: string;
};

export function InputComponent({ label, ...rest }: InputComponentProps) {
  return (
    <Container>
      <InputLabel>{label}</InputLabel>
      <Input {...rest} />
    </Container>
  );
}
