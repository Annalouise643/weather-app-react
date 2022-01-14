import "./App.css";

function App() {
  return (
    <div className="container m-30">
      <div className="App card p-5">
        <h1 className="mb-3">React Weather Search Engine</h1>
        <form>
          <div class="input-group mb-3">
            <input type="text" placeholder="Enter a city" autofocus />
            <input type="submit" value="Search" class="btn btn-primary" />
            <button className="btn btn-success">Current</button>
          </div>
        </form>
        <h4>London</h4>
        <p>Friday 17:49</p>
        <div className="row">
          <div className="col">Clouds</div>
          <div className="col temp">
            14<small>°C</small>
          </div>
          <div className="col">
            <p>Precipitation: 0%</p>
            <p>Wind:3km/h</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
