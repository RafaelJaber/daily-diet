import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

export const AreaView = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
`;

export const Container = styled.View`
  flex: 1;

  padding: 24px;
`;

export const TextMD = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_1};
  `};
  text-align: left;
  margin-top: 40px;
  margin-bottom: 8px;
`;

export const ListHeader = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.GRAY_1};
  `};
  margin-top: 32px;
  margin-bottom: 8px;
`;
