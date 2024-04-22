import { ArrowLeft } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type HeaderColorProps = "GREEN" | "RED" | "GRAY";

type HeaderBackIconProps = {
  color: HeaderColorProps;
};

export const Container = styled.View<HeaderBackIconProps>`
  height: 140px;
  background-color: ${({ theme, color }) =>
    color === "GREEN"
      ? theme.COLORS.GREEN_LIGHT
      : color === "RED"
        ? theme.COLORS.RED_LIGHT
        : theme.COLORS.GRAY_5};

  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding-right: 24px;
  padding-left: 24px;

  padding-bottom: 15px;
`;

export const BackButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})``;

export const BackIcon = styled(ArrowLeft).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GRAY_2,
}))``;

export const Title = styled.Text`
  flex: 1;
  text-align: center;
  margin-right: 24px;
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.GRAY_1};
  `}
`;
