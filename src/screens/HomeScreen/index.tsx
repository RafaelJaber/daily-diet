import { Text } from "react-native";

import { HeaderComponent } from "@/components/HeaderComponent";

import { AreaView, Container } from "./styles";

export function HomeScreen() {
  return (
    <AreaView>
      <HeaderComponent />
      <Container>
        <Text>Teste de conteúdo</Text>
      </Container>
    </AreaView>
  );
}
