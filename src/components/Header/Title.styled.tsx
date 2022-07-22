import styled from "styled-components";

interface TitleProps {
  readonly isHomePage: boolean;
}

const Title = styled.a<TitleProps>`
  color: ${({ theme }) => theme.colors.textLink};
  text-decoration: none;
  text-align: center;
  font-weight: bold;
  font-size: ${({ isHomePage }) => (isHomePage ? "2rem" : "1.5rem")};
`;

export default Title;
