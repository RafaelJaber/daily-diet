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
import { getUser, register } from "@/services/loginService";

import { Container, FormContent, Logo, SafeArea } from "./styles";

const registerSchema = z.object({
  email: z.string(),
  password: z.string(),
});

type RegisterSchemaForm = z.infer<typeof registerSchema>;

export function AuthRegisterScreen() {
  const navigation = useNavigation();
  const user = getUser();

  const {
    control,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<RegisterSchemaForm>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(registerSchema),
  });

  const inputPasswordRef = useRef<TextInput>(null);

  function handleLogin(data: RegisterSchemaForm) {
    if (data.email.trim().length === 0 || data.password.trim().length === 0) {
      return Alert.alert("Cadastro", "Verifique os campos preenchidos.");
    } else {
      register({ email: data.email, password: data.password })
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

  function handleNavigateLogin() {
    navigation.navigate("login");
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
              text={"Criar conta"}
              icon={"app-registration"}
              onPress={handleSubmit(handleLogin)}
              disabled={isSubmitting}
            />
          </FormContent>
        </Container>
      </TouchableWithoutFeedback>
      <ButtonComponent
        text={"Login"}
        type={"SECONDARY"}
        icon={"login"}
        onPress={handleNavigateLogin}
      />
    </SafeArea>
  );
}
