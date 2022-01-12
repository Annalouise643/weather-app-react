import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="App card p-5">
        <h1>React Weather Search Engine</h1>

        <form>
          <div className="row">
            <div className="col-8">
              <input
                type="text"
                placeholder="Enter a city"
                className="w-100"
                autofocus
              />
            </div>

            <div className="col-2">
              <input type="submit" value="Search" class="btn btn-primary" />
            </div>
            <div className="col-2">
              <button className="btn btn-success">Current</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
