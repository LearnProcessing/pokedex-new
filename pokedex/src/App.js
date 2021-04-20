import PokemonList from './pages/PokemonList'
import MyPokemonList  from './pages/MyPokemonList'
import Navbar from './components/Navbar'
import PokemonDetail from './pages/PokemonDetail'


import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <div className="h-full" style={{backgroundImage: `url("https://i.pinimg.com/originals/28/d0/23/28d0231a25fc8a7ee02a9081251c47bf.png")`}}>
        <Switch>
          <Route path='/mypokemons'>
            <MyPokemonList/>
          </Route>
          <Route path='/pokemons/:name'>
            <PokemonDetail/>
          </Route>
          <Route path='/pokemons'>
            <PokemonList/>
          </Route>
        </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
