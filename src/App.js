import "./App.css";

function App() {
  return (
    <div class="container">
      <div className="App card">
        <h1>React Weather Search Engine</h1>

        <form>
          <input type="text" placeholder="enter a city" />
          <input type="submit" value="Search" class="btn btn-primary" />
          <button class="btn btn-success">Current</button>
        </form>
      </div>
    </div>
  );
}

export default App;
