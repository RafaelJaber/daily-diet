import DateTimePicker from "@react-native-community/datetimepicker";

import { Container, Label } from "./styles";

type dateReturn = {
  nativeEvent: { timestamp: string | number | Date };
};

type DateTimePickerComponentProps = {
  label: string;
  mode: "date" | "time";
  value: Date;
  disabled?: boolean;
  onChange: (event: dateReturn, selectedDate: Date | undefined) => void;
};

export function DateTimePickerComponent({
  label,
  mode,
  value,
  disabled = false,
  onChange,
}: DateTimePickerComponentProps) {
  return (
    <Container>
      <Label>{label}</Label>
      <DateTimePicker
        locale="pt-BR"
        value={value}
        mode={mode}
        is24Hour={true}
        onChange={onChange}
        timeZoneName={"America/Sao_Paulo"}
        disabled={disabled}
        display={"default"}
      />
    </Container>
  );
}
