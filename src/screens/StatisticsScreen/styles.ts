import styled, { css } from "styled-components/native";

export const AreaView = styled.View`
  flex: 1;
`;

export const Container = styled.View`
  flex: 1;

  border-radius: 20px;
  margin-top: -15px;

  align-items: center;

  gap: 40px;

  padding: 24px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
`;

export const ContainerHeader = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_1};
  `};
`;

export const CardContainer = styled.View`
  flex-direction: row;

  gap: 16px;

  align-items: center;
  justify-content: space-between;
`;
