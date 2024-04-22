import { Circle } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type CircleColorProps = "GREEN" | "RED";

type CircleProps = {
  type: CircleColorProps;
};

type ContainerProps = {
  type: "PRIMARY" | "SECONDARY";
};

type TextProps = {
  type: "PRIMARY" | "SECONDARY";
};

export const Container = styled.View`
  padding: 24px;
  flex: 1;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XL}px;
    color: ${theme.COLORS.GRAY_1};
  `}
  margin-bottom: 8px
`;

export const Description = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_2};
  `}
  margin-bottom: 12px
`;

export const SubTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_1};
  `}
  margin-bottom: 8px
`;

export const Badge = styled.View`
  padding: 8px 16px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.COLORS.GRAY_5};

  align-items: center;
  justify-content: left;

  flex-direction: row;

  gap: 8px;

  width: 144px;
`;

export const BadgeText = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.XS}px;
    color: ${theme.COLORS.GRAY_2};
  `}
`;

export const CircleIcon = styled(Circle).attrs<CircleProps>(
  ({ theme, type }) => ({
    size: 12,
    color: type === "GREEN" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
    weight: "fill",
  }),
)``;

export const ButtonView = styled.View`
  position: absolute;
  bottom: 24px;
  left: 24px;
  width: 100%;
  gap: 8px;
`;

export const ModalView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  background-color: rgba(0, 0, 0, 0.3);
`;

export const ModalContent = styled.View`
  margin: 20px;
  background-color: #fff;
  border-radius: 20px;
  padding: 35px;
  align-items: center;
`;

export const ModalFooter = styled.View`
  max-width: 100%;
  width: 100%;
  flex-direction: row;
  gap: 16px;
`;

export const ModalButton = styled(TouchableOpacity).attrs<ContainerProps>({
  activeOpacity: 0.7,
})`
  min-height: 50px;
  max-height: 50px;

  padding: 0 15px;

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

export const ModalButtonText = styled.Text<TextProps>`
  ${({ theme, type }) => css`
    color: ${type === "PRIMARY" ? theme.COLORS.WHITE : theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}
`;
