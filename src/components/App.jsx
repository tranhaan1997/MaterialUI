import { useState } from "react";
import Header from "./ui/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      Hello World
    </>
  );
}

export default App;
