import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import ListarGastos from "./components/ListarGastos"
import AgregarGasto from './components/AgregarGasto';
import Gasto from "./components/Gasto"
import { Switch, Route, Link } from "react-router-dom"

function App() {

function handler(){
  console.log(("a"))
}

  return (
    <div className="App">
      <button onClick={handler}>Prueba</button>
      <nav className="navbar navbar-expand">
      <Link to={"/gastos"} className="nav-link">Gastos
      </Link>
      <Link to={"/add"} className="nav-link">Agregar
      </Link>

      </nav>
      {/* <ListarGastos /> 
      <AgregarGasto />
      <Gasto /> */}
<div>
<Switch>
  <Route exact path="/gastos" component={ListarGastos} />
  <Route exact path="/add" component={AgregarGasto} />
  <Route exact path="/gastos/:id" component={Gasto} />
</Switch>
</div>

    </div>
  );
}

export default App;
