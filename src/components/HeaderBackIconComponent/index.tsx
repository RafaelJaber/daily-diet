import { useNavigation } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { BackButton, BackIcon, Container, Title } from "./styles";

type HeaderBackIconComponentProps = {
  title: string;
};

export function HeaderBackIconComponent({
  title,
}: HeaderBackIconComponentProps) {
  const insets = useSafeAreaInsets();

  const navigation = useNavigation();

  function handleNavigateHome() {
    navigation.navigate("home");
  }

  return (
    <Container
      style={{
        paddingTop: insets.top,
      }}
    >
      <BackButton onPress={handleNavigateHome}>
        <BackIcon />
      </BackButton>
      <Title>{title}</Title>
    </Container>
  );
}
