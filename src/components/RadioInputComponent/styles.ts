import { Circle } from "phosphor-react-native";
import styled, { css } from "styled-components/native";

export type ColorIconProps = "GREEN" | "RED";

type ContainerProps = {
  selected: boolean;
  color: ColorIconProps;
};

type CircleIconProps = {
  color: ColorIconProps;
};

export const Container = styled.TouchableOpacity.attrs<ContainerProps>({
  activeOpacity: 0.7,
})`
  height: 50px;

  flex-direction: row;

  width: 50%;

  gap: 8px;

  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.COLORS.GRAY_6};

  border-radius: 6px;

  ${({ theme, selected, color }) =>
    selected &&
    css`
      background-color: ${color === "GREEN"
        ? theme.COLORS.GREEN_LIGHT
        : theme.COLORS.RED_LIGHT};
      border: 1px solid
        ${color === "GREEN" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
    `}
`;

export const CircleIcon = styled(Circle).attrs<CircleIconProps>(
  ({ theme, color }) => ({
    size: 10,
    weight: "fill",
    color: color === "GREEN" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
  }),
)``;

export const Label = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_2};
  `}
`;
