import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const AreaView = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
`;

export const Container = styled.View`
  flex: 1;

  padding: 24px;
`;
