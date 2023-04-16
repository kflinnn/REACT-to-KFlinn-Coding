import './App.css';
import Portfolio from './components/Portfolio';
import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
