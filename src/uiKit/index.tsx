import { Link } from "react-router-dom";
import styled from "styled-components";

interface DivProps {
  readonly justify: "end" | "start" | "center" | "between";
  readonly column?: boolean;
  readonly alignCenter?: boolean;
}

const mapJustify: any = {
  end: "end",
  start: "start",
  center: "center",
  between: " space-between",
};

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.bg}; ;
`;

export const Main = styled.main`
  margin-left: auto;
  margin-right: auto;
  max-width: 42rem;
  padding: 2.625rem 1.3125rem;
`;

export const Div = styled.div<DivProps>`
  display: flex;
  justify-content: ${(props) => mapJustify[props.justify]};
  flex-direction: ${(props) => (props.column ? "column" : "row")};
  align-items: ${(props) => (props.alignCenter ? "center" : "start")};
`;

export const Anchor = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.textLink};
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.textLink};
`;

export const StyledH3 = styled.h3`
  font-size: 1.75rem;
  margin-bottom: 0.4375rem;
  margin-top: 3.5rem;
`;
