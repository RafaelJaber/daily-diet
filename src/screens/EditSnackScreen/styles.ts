import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;

  border-radius: 20px;
  margin-top: -15px;

  padding: 24px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
`;

export const Content = styled.View`
  flex: 1;
  gap: 24px;
`;

export const GroupedInput = styled.View`
  flex-direction: row;

  width: 100%;

  gap: 8px;

  align-items: end;
  justify-content: space-between;
`;
