import { KeyboardAvoidingView, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const SafeArea = styled(SafeAreaView)`
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
  padding: 24px;
  flex: 1;
`;

export const Container = styled(KeyboardAvoidingView).attrs({
  behavior: Platform.OS === "ios" ? "padding" : "height",
})`
  flex: 1;

  justify-content: center;
  align-items: center;
`;

export const Logo = styled.Image`
  height: 100px;
  width: 221px;

  margin-bottom: 40px;
`;

export const FormContent = styled.View`
  justify-content: center;
  align-items: center;

  gap: 24px;

  width: 100%;
`;
