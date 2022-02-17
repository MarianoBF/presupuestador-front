import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import { SAMPLEENTRIES, SAMPLEBUDGETCATEGORIES } from "./SampleData";
import EntryDataService from "../services/entry.service";
import BudgetDataService from "../services/budget.service";
import { useState } from "react";
import { Link } from "react-router-dom";
import ConfirmationModal from "../components/ConfirmationModal";

function Configuration() {
  const [loaded, setLoaded] = useState(false);
  const [deleted, setDeleted] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [modalShow, setModalShow] = useState(false);

  const loadSampleData = () => {
    let entryFlag = true;
    SAMPLEBUDGETCATEGORIES.forEach((samplecategory) => {
      const category = {
        category: samplecategory.category,
        description: samplecategory.description,
        limit: samplecategory.limit,
      };
      BudgetDataService.create(category)
        // eslint-disable-next-line no-loop-func
        .then((res) => {
          if (entryFlag === true) {
            SAMPLEENTRIES.forEach((sampleEntry) => {
              const entry = {
                date: sampleEntry.date,
                category: sampleEntry.category,
                description: sampleEntry.description,
                amount: sampleEntry.amount,
                kind: sampleEntry.kind,
              };

              EntryDataService.create(entry)
                .then((res) => {
                  setLoaded(true);
                })
                .catch((error) => {
                  setError(true);
                  setErrorMessage(
                    "No se han podido cargar datos de prueba, ya están cargados o se ha producido un error."
                  );
                });
            });
            entryFlag = false;
          }
        })
        .catch((error) => {
          setError(true);
          setErrorMessage(
            "No se han podido cargar datos de prueba, ya están cargados o se ha producido un error."
          );
        });
    });
  };

  const deleteData = () => {
    setModalShow(true);
  };

  const handleModalResult = (result) => {
    setModalShow(false);
    if (result) {
      try {
        BudgetDataService.deleteAll();
        EntryDataService.deleteAll();
        setDeleted(true);
      } catch {
        setError(true);
        setErrorMessage(
          "No se han podido cargar datos de prueba, ya están cargados o se ha producido un error."
        );
      }
    }
  };

  return (
    <div className="centeredContainer">
      <h1>Opciones de configuración</h1>
      <Button
        className="spacedButton"
        onClick={loadSampleData}
        variant="secondary"
      >
        Cargar datos de prueba
      </Button>{" "}
      <Button className="spacedButton" onClick={deleteData} variant="danger">
        Borrar todos los datos
      </Button>
      {loaded && (
        <div>
          <Alert variant="success" onClose={() => setLoaded(false)}  dismissible>
            <p className="blueText">Datos de prueba cargados exitosamente.</p>
            <Link to="/entries">
              <button> Ir al listado </button>
            </Link>
          </Alert>
        </div>
      )}
      {deleted && (
        <Alert variant="success" onClose={() => setDeleted(false)} dismissible>
          <p>
            {"Se borraron todos los datos exitosamente"}
          </p>
        </Alert>
      )}
      {error && (
        <Alert variant="danger" onClose={() => setError(false)}  dismissible>
          <p className="redText">{errorMessage}</p>
        </Alert>
      )}
      <ConfirmationModal
        show={modalShow}
        message={
          "Esto es irreversible, vas a borrar todos los datos y no se puede recuperar, ¿estás seguro?"
        }
        onHide={() => setModalShow(false)}
        handleCancel={() => handleModalResult(false)}
        handleOK={() => handleModalResult(true)}
      />
    </div>
  );
}

export default Configuration;