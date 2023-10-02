import './App.css';
import SearchComponent from './components/SearchComponent';

function App() {
  return (
    <div className="App">
      <h1>Welcome to your politics helper!</h1>
      <hr></hr>
      <h2>What is the intention of this app?</h2>
      <SearchComponent></SearchComponent>
    </div>
  );
}

export default App;
