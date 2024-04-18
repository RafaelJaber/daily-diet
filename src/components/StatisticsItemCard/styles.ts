import styled, { css } from "styled-components/native";

export type CardStyleProps = "SUCCESS" | "FAILURE";

type ContainerProps = {
  type: CardStyleProps;
};

export const Container = styled.View<ContainerProps>`
  justify-content: center;
  align-items: center;

  min-height: 100px;

  border-radius: 8px;

  gap: 8px;
  padding: 16px;

  background-color: ${({ theme, type }) =>
    type === "SUCCESS" ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`;

export const TextBold = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_1};
  `};
`;

export const TextRegular = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_2};
  `};
  text-align: center;
`;
