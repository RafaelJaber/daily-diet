import { useRoute } from "@react-navigation/native";

import { FeedbackFailureComponent } from "@/components/FeedbackFailureComponent";
import { FeedbackSuccessComponent } from "@/components/FeedbackSuccessComponent";

import { Container } from "./styles";

type RouteParams = {
  withinTheDiet: boolean;
};

export function FeedbackRegistrationScreen() {
  const routes = useRoute();
  const { withinTheDiet } = routes.params as RouteParams;

  return (
    <Container>
      {withinTheDiet ? (
        <FeedbackSuccessComponent />
      ) : (
        <FeedbackFailureComponent />
      )}
    </Container>
  );
}
