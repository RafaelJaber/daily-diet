import logoImg from "@/assets/logo.png";

import { Avatar, Container, Logo } from "./styles";

export function HeaderComponent() {
  return (
    <Container>
      <Logo source={logoImg} />
    </Container>
  );
}
