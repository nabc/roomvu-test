import { Anchor, Div } from "@/uiKit";
import styled from "styled-components";

export const StyledFooter = styled.footer`
  margin-top: 4.375rem;
  padding-top: 1.75rem;
`;

export default function Footer() {
  return (
    <StyledFooter>
      <Div justify="between">
        <div>
          <Anchor href="https://mobile.twitter.com/dan_abramov" target="_blank" rel="noopener noreferrer">
            twitter
          </Anchor>{" "}
          •{" "}
          <Anchor href="https://github.com/gaearon" target="_blank" rel="noopener noreferrer">
            github
          </Anchor>{" "}
          •{" "}
          <Anchor href="https://stackoverflow.com/users/458193/dan-abramov" target="_blank" rel="noopener noreferrer">
            stack overflow
          </Anchor>
        </div>
        <div>
          <Anchor href="/rss.xml" target="_blank" rel="noopener noreferrer">
            rss
          </Anchor>
        </div>
      </Div>
    </StyledFooter>
  );
}
