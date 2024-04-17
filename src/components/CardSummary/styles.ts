import { ArrowUpRight } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type CardStyleProps = "SUCCESS" | "FAILURE";

type CardProps = {
  type: CardStyleProps;
};

type IconProps = {
  type: CardStyleProps;
};

export const Container = styled(TouchableOpacity).attrs<CardProps>({
  activeOpacity: 0.7,
})`
  width: 100%;
  min-height: 100px;
  max-height: 100px;

  border-radius: 8px;

  justify-content: center;
  align-items: center;

  position: relative;

  background-color: ${({ theme, type }) =>
    type === "SUCCESS" ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`;

export const ArrowIcon = styled(ArrowUpRight).attrs<IconProps>(
  ({ theme, type }) => ({
    size: 24,
    color: type === "SUCCESS" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
  }),
)`
  position: absolute;
  right: 8px;
  top: 8px;
`;

export const Percent = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XXL}px;
    color: ${theme.COLORS.GRAY_1};
  `};
  text-align: center;
`;

export const SubText = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_2};
  `};
  text-align: center;
`;
