import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;

  align-items: center;
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_2};
  `}
`;
