import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="App card p-5">
        <h1 className="mb-3">React Weather Search Engine</h1>
        <form>
          <div class="input-group mb-3">
            <input type="text" placeholder="Enter a city" autofocus />
            <input type="submit" value="Search" class="btn btn-primary" />
            <button className="btn btn-success">Current</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
