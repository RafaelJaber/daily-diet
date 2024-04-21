import React from "react";
import { TextInput, TextInputProps } from "react-native";

import { Container, Input, InputLabel } from "./styles";

type InputComponentProps = TextInputProps & {
  label: string;
  inputRef?: React.RefObject<TextInput>;
};

export function InputComponent({
  label,
  inputRef,
  ...rest
}: InputComponentProps) {
  return (
    <Container>
      <InputLabel>{label}</InputLabel>
      <Input {...rest} ref={inputRef} />
    </Container>
  );
}
