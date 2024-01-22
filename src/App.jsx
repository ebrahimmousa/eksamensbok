import Header from "./components/header/header";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import NavBar from "./components/header/NavBar";
import Hero from "./components/hero/Hero";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <NavBar />
        <Hero />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
