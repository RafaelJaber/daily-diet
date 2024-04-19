import { TextInput } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  width: 100%;

  align-items: start;
  justify-content: start;

  gap: 8px;
`;

export const Input = styled(TextInput).attrs(({ theme }) => ({
  placeholderTextColor: theme.COLORS.GRAY_3,
}))`
  padding: 14px;
  height: 120px;
  width: 100%;

  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_5};
  border-radius: 6px;
`;

export const InputLabel = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_2};
  `}
`;
