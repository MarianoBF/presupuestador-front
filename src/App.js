import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import AddEntry from './components/AddEntry';
import AddBudgetLine from "./components/AddBudgetLine";
import ListEntries from "./components/ListEntries";
import ListPlannedBudget from "./components/ListPlannedBudget";
import ListCurrentBudget from "./components/ListCurrentBudget";
import Configuration from "./components/Configuration";
import { Switch, Route, Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";



function App() {

  return (
    <div className="App">
      <Navbar bg="primary" >
        <Navbar.Brand><Link to={"/"}>/Presupuestaré/
        </Link></Navbar.Brand>
      <Nav className="mr-auto">
      <Link to={"/gastos"} className="nav-link">Listado de movimientos
      </Link>
      <Link to={"/add"} className="nav-link">Agregar nuevo movimiento
      </Link>
      <Link to={"/agregarPres"} className="nav-link">Agregar nuevo rubro para presupuesto
      </Link>
      <Link to={"/listarPres"} className="nav-link">Presupuesto planificado
      </Link>
      <Link to={"/"} className="nav-link">Presupuesto vigente
      </Link>
      <Link to={"/config"} className="nav-link">Configuración
      </Link>
        </Nav>
      </Navbar>
 
      <div>
      <Switch>
        <Route exact path="/" component={ListCurrentBudget} />
        <Route exact path="/gastos" component={ListEntries} />
        <Route exact path="/add" component={AddEntry} />
        <Route exact path="/agregarPres" component={AddBudgetLine} />
        <Route exact path="/listarPres" component={ListPlannedBudget} />
        <Route exact path="/config" component={Configuration} />

      </Switch>
      </div>


   </div>
  );
}

export default App;
