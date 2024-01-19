import Header from "./components/header/header";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import NavBar from "./components/header/NavBar";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <NavBar />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
