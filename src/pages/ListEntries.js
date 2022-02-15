import EntryDataService from "../services/entry.service";
import BudgetDataService from "../services/budget.service";
import { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import "../App.css";
import numeral from "numeral";
// eslint-disable-next-line
import es from "numeral/locales/es";
import { Link } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";

numeral.locale("es");
numeral.defaultFormat("$0,0.00");

function ListEntries() {
  const [loading, setLoading] = useState(true);
  const [expenses, setExpenses] = useState([]);
  const [incomes, setIncomes] = useState([]);
  const [showIncome, setShowIncome] = useState(
    JSON.parse(localStorage.getItem("showIncome"))
      ? JSON.parse(localStorage.getItem("showIncome"))
      : false
  );
  const [editing, setEditing] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [deleted, setDeleted] = useState(false);
  const [edited, setEdited] = useState(false);

  useEffect(() => {
    EntryDataService.getAll()
      .then(({ data: entryList }) => {
        setExpenses(entryList.filter((item) => item.kind === "Egreso"));
        setIncomes(entryList.filter((item) => item.kind === "Ingreso"));
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setErrorMessage("No se ha podido conectar con el servidor");
        setTimeout(() => {
          setError(false);
          setErrorMessage("");
        }, 10000);
      });
  }, [deleted, edited]);

  const handleDeleteClick = (id) => {
    EntryDataService.delete(id)
      .then((response) => {
        setError(false);
        setDeleted(true);
        setTimeout(() => setDeleted(false), 4000);
      })
      .catch(() => {
        setError(true);
        setErrorMessage("No se ha podido borrar el movimiento");
        setTimeout(() => {
          setError(false);
          setErrorMessage("");
        }, 10000);
      });
    localStorage.setItem("selectedCategory", JSON.stringify(selectedCategory));
    localStorage.setItem("activeFilter", JSON.stringify(activeFilter));
    localStorage.setItem("showIncome", JSON.stringify(showIncome));
  };

  const [entry, setEntry] = useState();

  const handleEditClick = (id) => {
    showIncome
      ? setEntry(incomes.filter((item) => item.id === id)[0])
      : setEntry(expenses.filter((item) => item.id === id)[0]);
    setEditing(true);
  };

  const handleInput = (event) => {
    const { name, value } = event.target;
    setEntry({ ...entry, [name]: value });
  };

  const saveEdit = (e) => {
    e.preventDefault();
    try {
      const data = {
        id: entry.id,
        date: entry.date,
        category: entry.category,
        description: entry.description,
        amount: entry.amount,
        kind: entry.kind,
      };
      EntryDataService.update(data.id, data)
        .then((response) => {
          setEditing(false);
          setError(false);
          setEdited(true);
          setTimeout(() => setEdited(false), 4000);
        })
        .catch(() => {
          setError(true);
          setErrorMessage("No se ha podido editar el movimiento");
          setTimeout(() => {
            setError(false);
            setErrorMessage("");
          }, 10000);
        });
    } finally {
      setEditing(false);
      setEntry("");
    }
  };

  const cancelEdit = () => {
    setEditing(false);
    setEntry(undefined);
  };

  const changeKind = () => {
    setShowIncome(!showIncome);
    localStorage.setItem("showIncome", JSON.stringify(!showIncome));
  };

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    BudgetDataService.getAll()
      .then(({ data: budget }) => {
        setCategories(budget.map((item) => item.category));
      })
      .catch(() => {
        setError(true);
        setErrorMessage("No se ha podido borrar el movimiento");
        setTimeout(() => {
          setError(false);
          setErrorMessage("");
        }, 10000);
      });
  }, []);

  const [selectedCategory, setSelectedCategory] = useState(
    JSON.parse(localStorage.getItem("selectedCategory"))
      ? JSON.parse(localStorage.getItem("selectedCategory"))
      : ""
  );
  const [activeFilter, setActiveFilter] = useState(
    JSON.parse(localStorage.getItem("activeFilter"))
      ? JSON.parse(localStorage.getItem("activeFilter"))
      : false
  );

  const handleCategorySelection = (event) => {
    if (event.target.value === "Todos") {
      cancelFilter();
    } else {
      setActiveFilter(true);
      setSelectedCategory(event.target.value);
      localStorage.setItem(
        "selectedCategory",
        JSON.stringify(event.target.value)
      );
      localStorage.setItem("activeFilter", JSON.stringify(true));
    }
  };

  const cancelFilter = () => {
    setActiveFilter(false);
    setSelectedCategory("Todos");
    localStorage.setItem("selectedCategory", JSON.stringify(""));
    localStorage.setItem("activeFilter", JSON.stringify(false));
  };

  const filteredIncomes = incomes
    .filter((itemF) => itemF.category === selectedCategory)
    .map((item) => {
      return (
        <tr key={item.id}>
          <td>{item.date.slice(0, 10)}</td>
          <td>{item.category}</td>
          <td>{item.description}</td>
          <td>{+item.amount.toFixed(2)}</td>
          <td className="editCell" onClick={() => handleEditClick(item.id)}>
            Editar
          </td>
          <td className="deleteCell" onClick={() => handleDeleteClick(item.id)}>
            Borrar
          </td>
        </tr>
      );
    });

  const unfilteredIncomes = incomes.map((item) => {
    return (
      <tr key={item.id}>
        <td>{item.date.slice(0, 10)}</td>
        <td>{item.category}</td>
        <td>{item.description}</td>
        <td>{numeral(item.amount).format()}</td>
        <td className="editCell" onClick={() => handleEditClick(item.id)}>
          Editar
        </td>
        <td className="deleteCell" onClick={() => handleDeleteClick(item.id)}>
          Borrar
        </td>
      </tr>
    );
  });

  const filteredExpenses = expenses
    .filter((itemF) => itemF.category === selectedCategory)
    .map((item) => {
      return (
        <tr key={item.id}>
          <td>{item.date.slice(0, 10)}</td>
          <td>{item.category}</td>
          <td>{item.description}</td>
          <td>{+item.amount.toFixed(2)}</td>
          <td className="editCell" onClick={() => handleEditClick(item.id)}>
            Editar
          </td>
          <td className="deleteCell" onClick={() => handleDeleteClick(item.id)}>
            Borrar
          </td>
        </tr>
      );
    });

  const unfilteredExpenses = expenses.map((item) => {
    return (
      <tr key={item.id}>
        <td>{item.date.slice(0, 10)}</td>
        <td>{item.category}</td>
        <td>{item.description}</td>
        <td>{numeral(item.amount).format()}</td>
        <td className="editCell" onClick={() => handleEditClick(item.id)}>
          Editar
        </td>
        <td className="deleteCell" onClick={() => handleDeleteClick(item.id)}>
          Borrar
        </td>
      </tr>
    );
  });

  const categoryList = [
    <option key="Todos">Todos</option>,
    categories.map((item) => {
      return <option key={item}>{item}</option>;
    }),
  ];

  if (loading) {
    return (
      <div className="loading">
        <Spinner animation="grow" variant="success" />
      </div>
    );
  }

  if (expenses.length === 0 && incomes.length === 0) {
    return (
      <div>
        <h1>Aún no tenés movimientos cargados</h1>

        <Link to="/add">
          <button> Sumar movimiento </button>
        </Link>
      </div>
    );
  }

  return (
    <div>
      {!editing ? (
        <header className="centeredHeader">
          <h1>Listado de {showIncome ? "ingresos" : "gastos"} cargados</h1>
          {deleted && (
            <Alert variant="success" dismissible>
              <p>Movimiento borrado con éxito</p>
            </Alert>
          )}
          {edited && (
            <Alert variant="success" dismissible>
              <p>Movimiento editado con éxito</p>
            </Alert>
          )}
          {error && (
            <Alert variant="danger" dismissible>
              <p>{errorMessage ? errorMessage : "Error de servidor"}</p>
            </Alert>
          )}
          <Button
            className="spacedButton"
            onClick={changeKind}
            variant="primary"
          >
            {" "}
            Mejor mostrame los {showIncome ? "Gastos" : "Ingresos"}
          </Button>

          <Form>
            <Form.Label>Filtrame por el siguiente Rubro: </Form.Label>
            <Form.Control
              className="civilizedDropdown"
              as="select"
              value={selectedCategory}
              onChange={handleCategorySelection}
              name="category"
            >
              {categoryList}
            </Form.Control>
            <Button
              className="spacedButton"
              onClick={cancelFilter}
              variant="secondary"
            >
              {" "}
              Resetear Filtro
            </Button>
          </Form>
        </header>
      ) : null}
      {editing ? (
        <div>
          <h1 className="secondaryTitle">Editando movimiento:</h1>

          <Form onSubmit={saveEdit}>
            <Col md={6} className="centeredContainer">
              <Form.Label>Fecha:</Form.Label>
              <Form.Control
                value={entry.date.slice(0, 10)}
                onChange={handleInput}
                type="date"
                name="date"
                required
              />
              <Form.Label>Categoría:</Form.Label>
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
              <Form.Label>Descripción:</Form.Label>
              <Form.Control
                value={entry.description}
                onChange={handleInput}
                type="text"
                name="description"
                required
              />
              <Form.Label>Monto:</Form.Label>
              <Form.Control
                value={entry.amount}
                onChange={handleInput}
                type="number"
                name="amount"
                max="1000000"
                min="0"
                required
              />
              <Button className="spacedButton" type="submit" variant="primary">
                Guardar Edición
              </Button>{" "}
              <Button
                className="spacedButton"
                onClick={cancelEdit}
                variant="secondary"
              >
                Cancelar Edición
              </Button>
            </Col>
          </Form>
        </div>
      ) : null}

      {editing === false ? (
        <>
          <Table responsive="md" striped size="sm">
            <thead>
              <tr>
                <th>Fecha</th>
                <th>Rubro al que corresponde</th>
                <th>Descripción del gasto</th>
                <th>Monto</th>
                <th>Editar</th>
                <th>Borrar</th>
              </tr>
            </thead>
            <tbody className="tableText">
              {activeFilter === true
                ? showIncome
                  ? filteredIncomes
                  : filteredExpenses
                : showIncome
                ? unfilteredIncomes
                : unfilteredExpenses}
            </tbody>
          </Table>
        </>
      ) : null}
    </div>
  );
}

export default ListEntries;
