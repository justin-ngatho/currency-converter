import logo from './logo.svg';
import './App.css';
import Navbar from './components/nav';
import Converter from './components/currency';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Converter/>
      
    </div>
  );
}

export default App;
