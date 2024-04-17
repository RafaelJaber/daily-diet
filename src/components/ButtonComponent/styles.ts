import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type ButtonComponentStyle = "PRIMARY" | "SECONDARY";

type ContainerProps = {
  type: ButtonComponentStyle;
};

type TextProps = {
  type: ButtonComponentStyle;
};

type IconProps = {
  type: ButtonComponentStyle;
};

export const Container = styled(TouchableOpacity).attrs<ContainerProps>({
  activeOpacity: 0.7,
})`
  width: 100%;
  min-height: 50px;
  max-height: 50px;

  justify-content: center;
  align-items: center;
  flex-direction: row;

  border-radius: 6px;

  ${({ theme, type }) => css`
    background-color: ${type === "PRIMARY"
      ? theme.COLORS.GRAY_2
      : theme.COLORS.GRAY_7};
    border: 1px solid
      ${type === "PRIMARY" ? theme.COLORS.GRAY_2 : theme.COLORS.GRAY_1};
  `}
`;

export const Text = styled.Text<TextProps>`
  ${({ theme, type }) => css`
    color: ${type === "PRIMARY" ? theme.COLORS.WHITE : theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}
`;

export const Icon = styled(MaterialIcons).attrs<IconProps>(
  ({ theme, type }) => ({
    size: 18,
    color: type === "PRIMARY" ? theme.COLORS.WHITE : theme.COLORS.GRAY_1,
  }),
)``;
