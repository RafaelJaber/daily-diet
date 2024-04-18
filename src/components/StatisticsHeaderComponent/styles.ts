import { ArrowLeft } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type CardStyleProps = "SUCCESS" | "FAILURE";

type HeaderInformationProps = {
  type: CardStyleProps;
};

type BackIconProps = {
  type: CardStyleProps;
};

export const Container = styled.View<HeaderInformationProps>`
  height: 215px;

  padding: 0 24px 40px 24px;

  background-color: ${({ theme, type }) =>
    type === "SUCCESS" ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`;

export const ViewIconBack = styled(TouchableOpacity).attrs({
  activeOpacity: 0.7,
})`
  width: 100%;
`;

export const BackIcon = styled(ArrowLeft).attrs<BackIconProps>(
  ({ theme, type }) => ({
    color: type === "SUCCESS" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
    size: 24,
  }),
)``;

export const ViewHeaderInformation = styled.View`
  height: 100%;

  align-items: center;
  justify-content: center;
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
