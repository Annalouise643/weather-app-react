import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>React Weather Search Engine</h1>
      <form>
        <input type="text" placeholder="enter a city" />
        <input type="submit" value="Search" />
        <button>Current</button>
      </form>
    </div>
  );
}

export default App;
