import './App.css';
import SearchComponent from './components/SearchComponent';

function App() {
  return (
    <div className="App">
      <h1>Welcome to your Politics Helper!</h1>
      <hr></hr>
      <h2><u>What is the intention of this app?</u></h2>
      <p style={{ maxWidth: '800px', margin: '0 auto' }}>This app is intended to help individuals quickly obtain civic information related to their
          local area. This includes who represents them in government as well as information about local
          polling stations
      </p>
      <h2><u>Enter your address below to find information</u></h2>
      <br></br>
      <SearchComponent></SearchComponent>
    </div>
  );
}

export default App;
