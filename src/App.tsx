import { ThemeProvider } from "styled-components";
import "./App.css";
import Router from "./routes/Router";
import theme from "./styles/theme";
import ReactQueryProvider from "./components/Common/ReactQueryProvider";

function App() {
  return (
    <ReactQueryProvider>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </ReactQueryProvider>
  );
}

export default App;
