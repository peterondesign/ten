import Header from './Header';
import Hero from './Hero';
import About from './About';
import Movies from './Movies';


import './App.css';

function App() {
  return (
    <div>
      <Header/>
      <Hero/>
      <div className="container">
      <About/>
      <Movies/>
    </div>
    </div>
  );
}

export default App;
