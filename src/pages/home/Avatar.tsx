import { Anchor, Div } from "@/uiKit";
import writerAvatar from "@/assets/profile-pic.jpg";
import styled from "styled-components";

const StyledImg = styled.img`
  margin-right: 0.875rem;
  margin-bottom: 0;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
`;
const StyledParagraph = styled.p`
  display: block;
`;

export default function Avatar() {
  return (
    <Div justify="start" alignCenter>
      <StyledImg src={writerAvatar} alt="writer's avatar" />
      <Div justify="start" column>
        <StyledParagraph>
          Personal blog by <Anchor href="https://mobile.twitter.com/dan_abramov">Dan Abramov.</Anchor>
        </StyledParagraph>

        <StyledParagraph> I explain with words and code.</StyledParagraph>
      </Div>
    </Div>
  );
}
