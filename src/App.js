import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ResponsiveAppBar from './components/appbar/AppBar';
import HomePage from './components/HomePage/HomePage';
import GeneratePage from './components/GeneratePage/Generate';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/generate" element={<GeneratePage />}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
