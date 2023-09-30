import logo from './logo.svg';
import './App.css';
import ResponsiveAppBar from './components/appbar/AppBar';
import HomeSlide from './components/home/Home';
import AboutSlide from './components/about/About';

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <div className='Main-Container'>
          <HomeSlide></HomeSlide>
          <AboutSlide></AboutSlide>
        </div>
    </div>
  );
}

export default App;
