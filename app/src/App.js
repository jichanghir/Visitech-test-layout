import logo from './logo.svg';
import './App.css';

/**
  [
    {
      [<group_name>]: [
        {
          [<unit_name>]: [
            {
              [<zone_name>]: [ // sorted by time_begin
                {
                  time_begin: <Date>,
                  time_end: <Date>,
                }
              ]
            }
          ]
        }
      ]
    }
  ]
*/

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
