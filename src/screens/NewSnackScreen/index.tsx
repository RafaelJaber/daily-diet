import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigation } from "@react-navigation/native";
import { Controller, useForm } from "react-hook-form";
import { Alert, Keyboard, TouchableWithoutFeedback } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { z } from "zod";

import { ButtonComponent } from "@/components/ButtonComponent";
import { DateTimePickerComponent } from "@/components/DateTimePickerComponent";
import { HeaderBackIconComponent } from "@/components/HeaderBackIconComponent";
import { InputComponent } from "@/components/InputComponent";
import { RadioInputComponent } from "@/components/RadioInputComponent";
import { TextAreaComponent } from "@/components/TextAreaComponent";
import { createSnakeCollection } from "@/services/snakeService";

import { Container, Content, GroupedInput } from "./styles";

const registerSnakeForm = z.object({
  name: z.string(),
  description: z.string(),
  date: z.date().transform((value) => {
    return new Date(value.getFullYear(), value.getMonth(), value.getDate());
  }),
  time: z.date(),
  withinTheDiet: z.boolean(),
});

type RegisterSnakeForm = z.infer<typeof registerSnakeForm>;

export function NewSnackScreen() {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<RegisterSnakeForm>({
    defaultValues: {
      name: "",
      description: "",
      date: new Date(),
      time: new Date(),
      withinTheDiet: true,
    },
    resolver: zodResolver(registerSnakeForm),
  });

  function handleSubmitForm(data: RegisterSnakeForm) {
    if (data.name.trim().length === 0 || data.description.trim().length === 0) {
      return Alert.alert(
        "Cadastro de refeição",
        "Por favor, valide os campos preenchidos.",
      );
    }
    createSnakeCollection({
      name: data.name,
      description: data.description,
      date: data.date,
      time: data.time,
      withinTheDiet: true,
      id: "",
    })
      .then(() => {
        reset();
        navigation.navigate("feedback", { withinTheDiet: data.withinTheDiet });
      })
      .catch((error) => {
        console.log(error);
        Alert.alert(
          "Cadastro de refeição",
          "Erro ao realizar o cadastro, tente novamente.",
        );
      });
  }

  return (
    <>
      <HeaderBackIconComponent title={"Nova refeição"} />

      <Container
        style={{
          paddingBottom: insets.bottom,
        }}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <Content>
            <Controller
              control={control}
              name={"name"}
              render={({ field: { value, onChange, onBlur } }) => (
                <InputComponent
                  label={"Nome"}
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                />
              )}
            />

            <Controller
              control={control}
              name={"description"}
              render={({ field: { value, onChange, onBlur } }) => (
                <TextAreaComponent
                  label={"Descrição"}
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                />
              )}
            />

            <GroupedInput>
              <Controller
                control={control}
                name={"date"}
                render={({ field: { value, onChange, disabled } }) => (
                  <DateTimePickerComponent
                    label={"Data"}
                    mode={"date"}
                    value={value}
                    disabled={disabled}
                    onChange={(_, selectedDate) => {
                      onChange(selectedDate);
                    }}
                  />
                )}
              />

              <Controller
                control={control}
                name={"time"}
                render={({ field: { value, onChange, disabled } }) => (
                  <DateTimePickerComponent
                    label={"Hora"}
                    mode={"time"}
                    value={value}
                    disabled={disabled}
                    onChange={(_, selectedDate) => {
                      onChange(selectedDate);
                    }}
                  />
                )}
              />
            </GroupedInput>

            <Controller
              control={control}
              name={"withinTheDiet"}
              render={({ field: { value, onChange } }) => (
                <GroupedInput>
                  <RadioInputComponent
                    color={"GREEN"}
                    label={"Sim"}
                    value={value ? "withinTheDiet" : ""}
                    control={"withinTheDiet"}
                    onPress={() => {
                      onChange(true);
                    }}
                  />
                  <RadioInputComponent
                    color={"RED"}
                    label={"Não"}
                    value={!value ? "withinTheDiet" : ""}
                    control={"withinTheDiet"}
                    onPress={() => {
                      onChange(false);
                    }}
                  />
                </GroupedInput>
              )}
            />
            <ButtonComponent
              text={"Cadastrar refeição"}
              style={{ position: "absolute", bottom: 0 }}
              onPress={handleSubmit(handleSubmitForm)}
              disabled={isSubmitting}
            />
          </Content>
        </TouchableWithoutFeedback>
      </Container>
    </>
  );
}
