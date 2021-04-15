import logo from './logo.svg';
import './App.css';
import PokemonList from './pages/PokemonList'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/'>
            <PokemonList/>

          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
