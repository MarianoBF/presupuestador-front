import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logo from "../assets/logo.png";

export default function Barra() {
  return (
    <Navbar bg="dark" variant="dark" sticky="top" expand="md">
      <Navbar.Brand>
        <Link to={"/"}>/Presupuestaré/ <img className="logo" src={logo} alt="logo" /></Link>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav className="mr-auto">
          <Link to={"/entries"} className="nav-link">
            Listar movimientos
          </Link>
          <Link to={"/add"} className="nav-link">
            Sumar movimiento
          </Link>
          <Link to={"/addBudget"} className="nav-link">
            Sumar categoría de movimiento
          </Link>
          <Link to={"/budget"} className="nav-link">
            Presupuesto
          </Link>
          <Link to={"/config"} className="nav-link">
            Configuración
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
