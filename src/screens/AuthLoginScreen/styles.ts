import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;

  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.GRAY_7};

  padding: 24px;
`;

export const Logo = styled.Image`
  height: 100px;
  width: 221px;

  margin-bottom: 40px;
`;

export const FormContent = styled.View`
  justify-content: center;
  align-items: center;

  gap: 24px;

  width: 100%;
`;
