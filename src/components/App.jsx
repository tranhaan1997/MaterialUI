import { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import Header from "./ui/Header";
import theme from "./ui/Theme";
function App() {
  const [count, setCount] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <Header />
      Hello World
    </ThemeProvider>
  );
}

export default App;
