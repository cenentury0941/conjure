import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ResponsiveAppBar from './components/appbar/AppBar';
import HomePage from './components/HomePage/HomePage';
import GeneratePage from './components/GeneratePage/Generate';
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main:"#000",
    },
    secondary: {
      main: "#b51212",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <BrowserRouter>
      <ResponsiveAppBar />
      <Routes>
        <Route path="/conjure/" element={<HomePage />}/>
        <Route path="/conjure/generate" element={<GeneratePage />}/>
      </Routes>
    </BrowserRouter>
    </div>
    </ThemeProvider>
  );
}

export default App;
