import { Circle } from "phosphor-react-native";
import styled, { css } from "styled-components/native";

export type IconColorProps = "INCLUDED" | "EXCLUDED";

type IconProps = {
  type: IconColorProps;
};

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  width: 100%;
  border-radius: 6px;
  padding: 17px 16px 17px 12px;

  margin-bottom: 8px;

  align-items: center;
  justify-content: space-between;
  flex-direction: row;

  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_5};
`;

export const Divider = styled.View`
  width: 2px;
  height: 14px;
  margin: 0 12px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_5};
`;

export const DateHour = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XS}px;
    color: ${theme.COLORS.GRAY_1};
  `}
`;

export const SnackName = styled.Text`
  flex: 1;
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_2};
  `}
`;

export const CircleIcon = styled(Circle).attrs<IconProps>(
  ({ theme, type }) => ({
    size: 14,
    weight: "fill",
    color: type === "INCLUDED" ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID,
  }),
)``;
