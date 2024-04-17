import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 0 24px;
`;

export const Logo = styled.Image`
  height: 37px;
  width: 82px;
`;

export const Avatar = styled.View`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  overflow: hidden;
  justify-content: center;
  align-items: center;

  border: 2px solid ${({ theme }) => theme.COLORS.GRAY_2};
`;
