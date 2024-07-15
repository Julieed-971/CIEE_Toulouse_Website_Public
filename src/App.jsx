import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import cover from './assets/images/cover.png';
import Story from './components/Story';
import Features from './components/Features';

function App() {
  return (
    <div className="App">
        <Navbar />
        <header className="App-header">
        <div className='header' style={{ display: "block" }}>
              <img src={cover} alt='cover' style={{ width: "100vw", height: "auto" }}/>
        </div>
        <div style={{ display: "flex", justifyContent: "center", padding: "15px" }}>
          <a href="https://github.com/Julieed-971/CIEE_Toulouse_website"
          target="_blank"
          rel="noopener noreferrer"
          className="button is-link is-large is-size-5"
          >
            Get Started
          </a>
        </div>
        </header>
        <div id="Story" className="section">
        <Story />
        </div><div id="Features" className="section">
        <Features />
        </div>
        <Footer />
    </div>
  );
}

export default App;
