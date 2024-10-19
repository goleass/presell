import { Container } from "@mui/material";
import "./App.css";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

function App({ children }) {
  return <Container maxWidth="sm" style={{ marginTop: "50px" }}>{children}</Container>;
}

export default App;
