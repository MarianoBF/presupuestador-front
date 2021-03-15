import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import AddEntry from './components/AddEntry';
import AddBudgetLine from "./components/AddBudgetLine";
import ListEntries from "./components/ListEntries";
import ListPlannedBudget from "./components/ListPlannedBudget";
import ListCurrentBudget from "./components/ListCurrentBudget";
import Configuration from "./components/Configuration";
import Home from "./components/Home";
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
      <Link to={"/entries"} className="nav-link">Listado de movimientos
      </Link>
      <Link to={"/add"} className="nav-link">Agregar nuevo movimiento
      </Link>
      <Link to={"/addBudget"} className="nav-link">Agregar nuevo rubro para presupuesto
      </Link>
      <Link to={"/plannedBudget"} className="nav-link">Presupuesto planificado
      </Link>
      <Link to={"/currentBudget"} className="nav-link">Presupuesto vigente
      </Link>
      <Link to={"/config"} className="nav-link">Configuración
      </Link>
      <Link to={"/"} className="nav-link">Home
      </Link>
        </Nav>
      </Navbar>
 
      <div>
      <Switch>
        <Route exact path="/currentBudget" component={ListCurrentBudget} />
        <Route exact path="/entries" component={ListEntries} />
        <Route exact path="/add" component={AddEntry} />
        <Route exact path="/addBudget" component={AddBudgetLine} />
        <Route exact path="/plannedBudget" component={ListPlannedBudget} />
        <Route exact path="/config" component={Configuration} />
        <Route exact path="/" component={Home} />

      </Switch>
      </div>


   </div>
  );
}

export default App;
