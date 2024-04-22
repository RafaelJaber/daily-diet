import { useNavigation } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import {
  BackButton,
  BackIcon,
  Container,
  HeaderColorProps,
  Title,
} from "./styles";

type HeaderBackIconComponentProps = {
  title: string;
  backgroundColor?: HeaderColorProps;
};

export function HeaderBackIconComponent({
  title,
  backgroundColor = "GRAY",
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
      color={backgroundColor}
    >
      <BackButton onPress={handleNavigateHome}>
        <BackIcon />
      </BackButton>
      <Title>{title}</Title>
    </Container>
  );
}
