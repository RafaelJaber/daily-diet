import { useNavigation } from "@react-navigation/native";

import illustrationImg from "@/assets/feedback_success.png";

import {
  Button,
  CenterView,
  Container,
  Image,
  SubTitle,
  SubTitleBold,
  TextButton,
  Title,
} from "./styles";

export function FeedbackSuccessComponent() {
  const navigation = useNavigation();

  function handleNavigateHome() {
    navigation.navigate("home");
  }

  return (
    <Container>
      <Title>Continue assim!</Title>

      <CenterView>
        <SubTitle>Você continua </SubTitle>
        <SubTitleBold>dentro da dieta. </SubTitleBold>
        <SubTitle>Muito bem!</SubTitle>
      </CenterView>

      <Image source={illustrationImg} />

      <Button onPress={handleNavigateHome}>
        <TextButton>Ir para a página inicial</TextButton>
      </Button>
    </Container>
  );
}
