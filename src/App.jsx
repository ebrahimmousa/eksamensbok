import Header from "./components/header/header";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Hero from "./components/hero/Hero";
import "swiper/css";
import "swiper/css/pagination";
import Icons from "./components/hero/Icons";
import Footer from "./components/footer/Footer";
import Main from "./components/main/main";
import ScrollToTop from "./components/scroll/ScrollToTop";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from "./components/Contact/Contact";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Icons />
                  <Header />
                  <Hero />
                  <Main />
                  <Footer />
                </>
              }
            />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
        <ScrollToTop />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
