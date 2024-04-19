import { TextInputProps } from "react-native";

import { Container, Input, InputLabel } from "./styles";

type TextAreaComponentProps = TextInputProps & {
  label: string;
};

export function TextAreaComponent({ label, ...rest }: TextAreaComponentProps) {
  return (
    <Container>
      <InputLabel>{label}</InputLabel>
      <Input {...rest} multiline numberOfLines={4} />
    </Container>
  );
}
