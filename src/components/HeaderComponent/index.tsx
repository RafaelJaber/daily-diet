import { Image } from "react-native";

import logoImg from "@/assets/logo.png";

import { Avatar, Container, Logo } from "./styles";

export function HeaderComponent() {
  return (
    <Container>
      <Logo source={logoImg} />
      <Avatar>
        <Image
          source={{ uri: "https://github.com/rafaeljaber.png" }}
          style={{ height: 40, width: 40 }}
        />
      </Avatar>
    </Container>
  );
}
