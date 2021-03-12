import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import ListarGastos from "./components/ListarGastos";
import AgregarGasto from './components/AgregarGasto';
import Gasto from "./components/Gasto";
import AgregarPresupuesto from "./components/AgregarPresupuesto";
import { Switch, Route, Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"


function App() {

  return (
    <div className="App">
      <Navbar bg="primary" >
        <Navbar.Brand><Link to={"/"}>/Presupuestador/
        </Link></Navbar.Brand>
      <Nav className="mr-auto">
      <Link to={"/gastos"} className="nav-link">Listado de Gastos
      </Link>
      <Link to={"/add"} className="nav-link">Agregar nuevo gasto
      </Link>
      <Link to={"/agregarPres"} className="nav-link">Agregar nuevo rubro para presupuesto
      </Link>
      <Link to={"/gastos/:id"} className="nav-link">Modificar Presupuesto
      </Link>
      </Nav>
       <Navbar.Brand>Una herramienta para tu presupuesto personal
        </Navbar.Brand>
      </Navbar>
 

<div>
<Switch>
  <Route exact path="/gastos" component={ListarGastos} />
  <Route exact path="/add" component={AgregarGasto} />
  <Route exact path="/gastos/:id" component={Gasto} />
  <Route exact path="/agregarpres" component={AgregarPresupuesto} />

</Switch>
</div>

    </div>
  );
}

export default App;
