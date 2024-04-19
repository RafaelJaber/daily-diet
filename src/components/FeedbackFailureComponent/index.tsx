import { useNavigation } from "@react-navigation/native";

import illustrationImg from "@/assets/feedback_failure.png";

import {
  Button,
  Container,
  Image,
  SubTitle,
  SubTitleBold,
  TextButton,
  Title,
} from "./styles";

export function FeedbackFailureComponent() {
  const navigation = useNavigation();

  function handleNavigateHome() {
    navigation.navigate("home");
  }

  return (
    <Container>
      <Title>Que pena!</Title>

      <SubTitle>
        Você <SubTitleBold>saiu da dieta </SubTitleBold>
        <SubTitle>
          dessa vez, mas continue se esforçando e não desista!
        </SubTitle>
      </SubTitle>

      <Image source={illustrationImg} />

      <Button onPress={handleNavigateHome}>
        <TextButton>Ir para a página inicial</TextButton>
      </Button>
    </Container>
  );
}
