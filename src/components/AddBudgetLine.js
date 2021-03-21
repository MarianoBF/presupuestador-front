import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import BudgetDataService from "../services/budget.service.js";

function AddBudgetLine() {
  const initialBudgetState = {
    category: "",
    description: "",
    limit: "",
  };

  const [budget, setBudget] = useState(initialBudgetState);
  const [sent, setSent] = useState(false);

  const handleInput = (event) => {
    const { name, value } = event.target;
    setBudget({ ...budget, [name]: value });
  };

  const saveBudget = (e) => {
    e.preventDefault();
    const data = {
      category: budget.category,
      description: budget.description,
      limit: budget.limit,
    };

    BudgetDataService.create(data)
      .then((response) => {
        setSent(true);
        console.log(response.data);
      })
      .catch(() => console.log("No se pudo sumar la nueva categoría"));
  };

  const newBudgetLine = () => {
    setBudget(initialBudgetState);
    setSent(false);
  };

  return (
    <div className="centeredContainer">
      <h1>
        Desde esta sección podés cargar nuevos rubros / categorías para ordenar
        tus movimientos.
      </h1>

      {sent ? (
        <div>
          <h1 className="secondaryTitle">Categoría agregada con éxito</h1>
          <button onClick={newBudgetLine}>Agregar otra</button>
        </div>
      ) : (
        <div>
          <p>(Todos los campos son obligatorios)</p>
          <Form onSubmit={saveBudget}>
            <Col md={6} className="centeredContainer">
              <Form.Group>
                <Form.Label>Nombre para el rubro / concepto: </Form.Label>
                <Form.Control
                  type="text"
                  value={budget.category}
                  onChange={handleInput}
                  name="category"
                  required
                ></Form.Control>
                <Form.Label>
                  Descripción extensa sobre qué incluye el rubro:{" "}
                </Form.Label>
                <Form.Control
                  type="text"
                  value={budget.description}
                  onChange={handleInput}
                  name="description"
                  required
                ></Form.Control>
                <Form.Label>Monto mensual objetivo para el rubro: </Form.Label>
                <Form.Control
                  type="number"
                  value={budget.limit}
                  onChange={handleInput}
                  name="limit"
                  max="10000000"
                  min="0"
                  required
                ></Form.Control>
              </Form.Group>
            </Col>
            <Button type="submit" className="spacedButton">
              Guardar
            </Button>
          </Form>
        </div>
      )}
    </div>
  );
}

export default AddBudgetLine;
