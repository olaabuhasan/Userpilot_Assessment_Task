
import "./App.css";
import {  ThemeProvider } from "@material-ui/core";
import { theme } from "theme";
import { BrowserRouter } from 'react-router-dom';
import {RouterConfig} from "./navigation/RouterConfig"; 
function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
       <RouterConfig />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
