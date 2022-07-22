import { useParams } from "react-router-dom";
import { Div } from "@/uiKit";
import Title from "./Title.styled";
import ThemeSwitch from "./ThemeSwitch";

export default function Header() {
  let { id } = useParams();

  return (
    <header>
      <Div justify="between" alignCenter>
        <Title href="https://overreacted.io/" isHomePage={!Boolean(id)}>
          Overreacted
        </Title>
        <ThemeSwitch />
      </Div>
    </header>
  );
}
