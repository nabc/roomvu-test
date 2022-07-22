import { ThemeProvider } from "styled-components";
import { useSelector } from "react-redux";
import { Routes, Route, Link } from "react-router-dom";

import { selectTheme } from "@/store/themeSlice";

import { GlobalStyles } from "@/components/Global";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { light, dark } from "@/components/Theme.styled";
import HomePage from "@/pages/home";
import PostPage from "@/pages/post";
import { Container, Main } from "@/uiKit";

const mapOfThemes = { light, dark };

function App() {
  const selectedTheme = useSelector(selectTheme);

  return (
    <ThemeProvider theme={mapOfThemes[selectedTheme]}>
      <Container>
        <Main>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/:id" element={<PostPage />} />
          </Routes>
          <Footer />
        </Main>
      </Container>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
