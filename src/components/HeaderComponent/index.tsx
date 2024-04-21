import { useNavigation } from "@react-navigation/native";
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
          <Image
            source={{ uri: "https://github.com/rafaeljaber.png" }}
            style={{ height: 40, width: 40 }}
          />
        </Avatar>
      </TouchableOpacity>
    </Container>
  );
}
