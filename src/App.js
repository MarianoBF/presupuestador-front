import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import AddEntry from './components/AddEntry';
import AddBudgetLine from "./components/AddBudgetLine";
import ListEntries from "./components/ListEntries";
import ListBudget from "./components/ListBudget";
import Configuration from "./components/Configuration";
import Home from "./components/Home";
import { Switch, Route, Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";



function App() {

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark" >
        <Navbar.Brand><Link to={"/"}>/Presupuestaré/
        </Link></Navbar.Brand>
      <Nav className="mr-auto">
      <Link to={"/entries"} className="nav-link">Listar movimientos
      </Link>
      <Link to={"/add"} className="nav-link">Sumar movimiento
      </Link>
      <Link to={"/addBudget"} className="nav-link">Sumar categoría de movimiento
      </Link>
      <Link to={"/budget"} className="nav-link">Presupuesto
      </Link>
      <Link to={"/config"} className="nav-link">Configuración
      </Link>
        </Nav>
      </Navbar>
 
      <div>
      <Switch>
        <Route exact path="/budget" component={ListBudget} />
        <Route exact path="/entries" component={ListEntries} />
        <Route exact path="/add" component={AddEntry} />
        <Route exact path="/addBudget" component={AddBudgetLine} />
        <Route exact path="/config" component={Configuration} />
        <Route exact path="/" component={Home} />

      </Switch>
      </div>
  

   </div>
  );
}

export default App;
