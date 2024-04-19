import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;

  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XL}px;
    color: ${theme.COLORS.GREEN_DARK};
  `};
`;

export const CenterView = styled.View`
  text-align: center;
  flex-direction: row;
`;

export const SubTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.GRAY_1};
  `};
`;

export const SubTitleBold = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.GRAY_1};
  `};
`;

export const Image = styled.Image`
  height: 280px;
  width: 220px;

  margin-top: 24px;
  margin-bottom: 24px;
`;

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  height: 50px;

  padding: 12px 24px;

  border-radius: 6px;

  ${({ theme }) => css`
    background-color: ${theme.COLORS.GRAY_2};
  `};
`;

export const TextButton = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.WHITE};
  `};
`;
