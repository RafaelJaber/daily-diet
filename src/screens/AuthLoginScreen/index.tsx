import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useRef } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  Alert,
  Keyboard,
  TextInput,
  TouchableWithoutFeedback,
} from "react-native";
import { z } from "zod";

import logoImg from "@/assets/logo.png";
import { ButtonComponent } from "@/components/ButtonComponent";
import { InputComponent } from "@/components/InputComponent";
import { getUser, login } from "@/services/loginService";

import { Container, FormContent, Logo, SafeArea } from "./styles";

const loginSchema = z.object({
  email: z.string(),
  password: z.string(),
});

type LoginSchemaForm = z.infer<typeof loginSchema>;

export function AuthLoginScreen() {
  const navigation = useNavigation();
  const user = getUser();

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

  const inputPasswordRef = useRef<TextInput>(null);

  function handleLogin(data: LoginSchemaForm) {
    if (data.email.trim().length === 0 || data.password.trim().length === 0) {
      return Alert.alert("Login", "Verifique os campos preenchidos.");
    } else {
      login({ email: data.email, password: data.password })
        .then(() => {
          navigation.navigate("home");
        })
        .catch((error) => {
          console.log(error);
          Alert.alert(
            "Login",
            "Ocorreu um erro ao realizar o login, verifique o usuário e senha preenchidos.",
          );
        });
    }
  }

  useEffect(() => {
    if (user) {
      navigation.navigate("home");
    }
  }, [navigation, user]);

  return (
    <SafeArea>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
                  keyboardType={"email-address"}
                  returnKeyType={"next"}
                  blurOnSubmit={false}
                  autoCorrect={false}
                  autoCapitalize={"none"}
                  onSubmitEditing={() => {
                    if (inputPasswordRef.current !== null) {
                      inputPasswordRef.current.focus();
                    } else {
                      Keyboard.dismiss();
                    }
                  }}
                />
              )}
            />

            <Controller
              control={control}
              name={"password"}
              render={({ field: { value, onChange, onBlur } }) => (
                <InputComponent
                  inputRef={inputPasswordRef}
                  label={"Password"}
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  textContentType={"password"}
                  returnKeyType={"join"}
                  onSubmitEditing={handleSubmit(handleLogin)}
                  secureTextEntry={true}
                  autoCorrect={false}
                  autoCapitalize={"none"}
                />
              )}
            />

            <ButtonComponent
              text={"Login"}
              icon={"login"}
              onPress={handleSubmit(handleLogin)}
              disabled={isSubmitting}
            />
          </FormContent>
        </Container>
      </TouchableWithoutFeedback>
      <ButtonComponent
        text={"Registrar"}
        type={"SECONDARY"}
        icon={"app-registration"}
      />
    </SafeArea>
  );
}
