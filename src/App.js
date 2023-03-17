import './App.css';
import Homepage from './Homepage'

function App() {
  const title = '~Welcome to the hotel homepage~';

  return (
    <div className="App">
      <h1>{title}</h1>
      <div className="content">
        <Homepage />
      </div>
    </div>
  );
}

export default App;
