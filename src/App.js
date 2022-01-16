import "./App.css";

function App() {
  return (
    <div className="container m-30">
      <div className="App card p-5">
        <h1 className="mb-3">React Weather Search Engine</h1>
        <form>
          <div class="input-group mb-3">
            <input
              type="text"
              placeholder="Enter a city"
              className="search-bar"
              autofocus
            />
            <input type="submit" value="Search" class="btn btn-light" />
            <button className="btn btn-dark">Current</button>
          </div>
        </form>
        <h4>London</h4>
        <p>Friday 17:49</p>
        <div className="row mb-3">
          <div className="col">
            <div className="row">
              <div className="col">Clouds</div>
              <div className="col">[Cloud Icon]</div>
            </div>
          </div>
          <div className="col temp">
            0<small>°C</small>
          </div>
          <div className="col">
            <p>Precipitation: 0%</p>
            <p>Wind:3km/h</p>
          </div>
        </div>
        <div className="container">
          <div className="row forecast">
            <div className="col">
              <div className="row">Mon</div>
              <div className="row">[Icon]</div>
              <div className="row">0°C</div>
            </div>
            <div className="col">
              <div className="row"> Tues</div>
              <div className="row">[Icon]</div>
              <div className="row">0°C</div>
            </div>

            <div className="col">
              <div className="row"> Weds</div>
              <div className="row">[Icon]</div>
              <div className="row">0°C</div>
            </div>
            <div className="col">
              <div className="row"> Thurs</div>
              <div className="row">[Icon]</div>
              <div className="row">0°C</div>
            </div>
            <div className="col">
              <div className="row"> Fri</div>
              <div className="row">[Icon]</div>
              <div className="row">0°C</div>
            </div>
          </div>
        </div>
      </div>
      <p className="open-source">
        <a href="">Open source code</a> by Anna Bray
      </p>
    </div>
  );
}

export default App;
