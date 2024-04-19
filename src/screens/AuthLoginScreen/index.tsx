import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { Alert } from "react-native";
import { z } from "zod";

import logoImg from "@/assets/logo.png";
import { ButtonComponent } from "@/components/ButtonComponent";
import { InputComponent } from "@/components/InputComponent";

import { Container, FormContent, Logo } from "./styles";

const loginSchema = z.object({
  email: z.string(),
  password: z.string(),
});

type LoginSchemaForm = z.infer<typeof loginSchema>;

export function AuthLoginScreen() {
  const {
    control,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<LoginSchemaForm>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(loginSchema),
  });

  function handleLogin(data: LoginSchemaForm) {
    if (data.email.trim().length === 0 || data.password.trim().length === 0) {
      return Alert.alert("Login", "Verifique os campos preenchidos.");
    } else {
      console.log("feio");
    }
  }

  return (
    <Container>
      <Logo source={logoImg} />

      <FormContent>
        <Controller
          control={control}
          name={"email"}
          render={({ field: { value, onChange, onBlur } }) => (
            <InputComponent
              label={"Email"}
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
            />
          )}
        />

        <Controller
          control={control}
          name={"password"}
          render={({ field: { value, onChange, onBlur } }) => (
            <InputComponent
              label={"Password"}
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
            />
          )}
        />

        <ButtonComponent
          text={"Login"}
          icon={"login"}
          onPress={handleSubmit(handleLogin)}
          disabled={isSubmitting}
        />

        <ButtonComponent
          text={"Registrar"}
          type={"SECONDARY"}
          icon={"app-registration"}
        />
      </FormContent>
    </Container>
  );
}
