import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;

  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
`;
