import { Container } from "@mui/material";
import "./App.css";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { Quiz } from "./quiz/720_receitas_zero";

function App() {
 

  return (
    <Container maxWidth="sm" style={{ marginTop: "50px" }}>
      <Quiz />
    </Container>
  );
}

export default App;
