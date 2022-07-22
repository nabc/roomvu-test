import { ChangeEvent, useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { selectTheme, setNewTheme } from "@/store/themeSlice";
import { Div } from "@/uiKit";
import { MoonImg, SunImg } from "@/components/Header/SwitchImages";

const Switch = styled.div`
  position: relative;
  width: 50px;
  height: 24px;
  background: #000;
  border-radius: 32px;
  padding: 4px;
  transition: 300ms all;

  &:before {
    transition: 300ms all;
    content: "";
    position: absolute;
    width: 22px;
    height: 22px;
    border-radius: 35px;
    top: 50%;
    left: 1px;
    background: white;
    transform: translate(0, -50%);
  }
`;

const Input = styled.input`
  display: none;

  &:checked + ${Switch} {
    &:before {
      transform: translate(32px, -50%);
    }
  }
`;

export default function ThemeSwitch() {
  const selectedTheme = useSelector(selectTheme);
  const dispatch = useDispatch();

  const handleChange = () => {
    const newTheme = selectedTheme === "dark" ? "light" : "dark";
    console.log("newTheme", newTheme);
    dispatch(setNewTheme(newTheme));
    localStorage.setItem("theme", JSON.stringify(newTheme));
  };

  useEffect(() => {
    const currentTheme = JSON.parse(localStorage.getItem("current-theme") as string);
    if (currentTheme) {
      dispatch(setNewTheme(currentTheme));
    }
  }, []);

  console.log("checked", selectedTheme === "dark");

  return (
    <Div justify="center" style={{ cursor: "pointer" }}>
      <Input checked={selectedTheme === "dark"} type="checkbox" readOnly />
      <Switch onClick={handleChange}>
        <Div justify="between">
          <MoonImg />
          <SunImg />
        </Div>
      </Switch>
    </Div>
  );
}
