import { useNavigation } from "@react-navigation/native";
import { SignOut } from "phosphor-react-native";
import { Alert, Image, TouchableOpacity } from "react-native";

import logoImg from "@/assets/logo.png";
import { logout } from "@/services/loginService";

import { Avatar, Container, Logo } from "./styles";

export function HeaderComponent() {
  const navigation = useNavigation();

  function handleLogout() {
    logout()
      .then(() => {
        navigation.navigate("login");
      })
      .catch(() => {
        Alert.alert("Logout", "Erro ao tentar sair da aplicação.");
      });
  }

  return (
    <Container>
      <Logo source={logoImg} />
      <TouchableOpacity activeOpacity={0.7} onPress={handleLogout}>
        <Avatar>
          <SignOut size={24} color={"#1B1D1E"} weight={"fill"} />
        </Avatar>
      </TouchableOpacity>
    </Container>
  );
}
