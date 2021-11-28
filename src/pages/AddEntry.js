import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import EntryDataService from "../services/entry.service";
import BudgetDataService from "../services/budget.service";

const AddEntry = () => {
  const initialEntryState = {
    date: "",
    category: "",
    description: "",
    amount: "",
    kind: "",
  };

  const [entry, setEntry] = useState(initialEntryState);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);
  // const [errorMessage, setErrorMessage] = useState('');

  const handleInput = (event) => {
    const { name, value } = event.target;
    setEntry({ ...entry, [name]: value });
  };

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    BudgetDataService.getAll()
      .then(({ data: budget }) => {
        setCategories(budget.map((item) => item.category));
      })
      .catch(() =>
        console.log("No se pudo recuperar el listado de categorías")
      );
  }, []);

  const saveEntry = (e) => {
    e.preventDefault();
    const data = {
      date: entry.date,
      category: entry.category,
      description: entry.description,
      amount: entry.amount,
      kind: entry.kind,
    };
    EntryDataService.create(data)
      .then(() => {
        setSent(true);
        setTimeout(() => setSent(false), 4000);
      })
      .catch((error) => {
        setError(true);
        // setErrorMessage(error.message)
        setTimeout(() => setError(false), 15000);
      });
  };

  // const newEntry = () => {
  //   setEntry(initialEntryState);
  //   setSent(false);
  // };

  const categoryList = categories.map((item) => (
    <option key={item}>{item}</option>
  ));

  return (
    <div className="centeredContainer">
      <h1>Desde esta sección podes cargar los nuevos movimientos</h1>
      {sent && (
        <Alert variant="success" dismissible>
          <p>Movimiento agregado con éxito</p>
        </Alert>
      )}
      {error && (
        <Alert variant="danger" dismissible>
          <p>
            No se pudo agregar el movimiento, error de servidor
            {/* : {errorMessage} */}
          </p>
        </Alert>
      )}
      {/* {sent ? (
        <div>
          <h1 className="secondaryTitle">Movimiento agregado con éxito</h1>
          <button onClick={newEntry}>Agregar otro</button>
        </div>
      ) : ( */}
      <div>
        <p>(Todos los campos son obligatorios)</p>
        <Form onSubmit={saveEntry}>
          <Col md={6} className="centeredContainer">
            <Form.Group>
              <Form.Label>Fecha del movimiento: </Form.Label>
              <Form.Control
                type="date"
                value={entry.date}
                onChange={handleInput}
                name="date"
                required
              ></Form.Control>
              <Form.Label>Concepto del movimiento: </Form.Label>
              <Form.Control
                as="select"
                value={entry.category}
                onChange={handleInput}
                name="category"
                required
              >
                <option></option>
                {categoryList}
              </Form.Control>
              <Form.Label>Observaciones del movimiento: </Form.Label>
              <Form.Control
                type="text"
                value={entry.description}
                onChange={handleInput}
                name="description"
                required
              ></Form.Control>
              <Form.Label>Monto del movimiento: </Form.Label>
              <Form.Control
                type="number"
                value={entry.amount}
                onChange={handleInput}
                name="amount"
                max="1000000"
                min="0"
                required
              ></Form.Control>
              <Form.Label>Tipo de movimiento (egreso/ingreso): </Form.Label>
              <Form.Control
                as="select"
                value={entry.kind}
                onChange={handleInput}
                name="kind"
                required
              >
                <option></option>
                <option value="Egreso">Egreso</option>
                <option value="Ingreso">Ingreso</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Button type="submit" className="spacedButton">
            Guardar
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default AddEntry;
