import EntryDataService from "../services/entry.service";
import { useState, useEffect, useRef } from "react";
import Table from "react-bootstrap/Table";
import Spinner from "react-bootstrap/Spinner";
import "../App.css";
import numeral from "numeral";
// eslint-disable-next-line
import es from "numeral/locales/es";
import Alert from "react-bootstrap/Alert";
import useMounted from "../hooks/useMounted";

function Home() {
  numeral.locale("es");
  numeral.defaultFormat("$0,0.00");

  const [entries, setEntries] = useState([]);
  const [totalExpenses, setTotalExpenses] = useState(0);
  const [totalIncome, setTotalIncome] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const isMounted = useMounted();
  const timer = useRef(true);

  useEffect(() => {
    EntryDataService.getAll()
      .then(({ data: entryList }) => {
        if (isMounted.current) {
          setEntries(entryList);
          setTotalExpenses(
            entryList
              .filter((item) => item.kind === "Egreso")
              .reduce((pre, cur) => {
                return pre + cur.amount;
              }, 0)
          );
          setTotalIncome(
            entryList
              .filter((item) => item.kind === "Ingreso")
              .reduce((pre, cur) => {
                return pre + cur.amount;
              }, 0)
          );
          setLoading(false);
        }
      })
      .catch((error) => {
        if (isMounted.current) {
          setLoading(false);
          setError(true);
          setErrorMessage(
            "No se pudo recuperar la información, problemas de conexión con el servidor."
          );
          timer.current = setTimeout(() => {
            setError(false);
            setErrorMessage("");
          }, 15000);
        }
      });
  }, [isMounted]);

  const lastEntriesList = entries
    .filter((item) => item.date !== null)
    .sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1))
    .slice(0, 10)
    .map((item) => {
      return (
        <tr key={item.id}>
          <td>{item.date.slice(0, 10)}</td>
          <td>{item.category}</td>
          <td>{item.description}</td>
          <td>{numeral(item.amount).format()}</td>
          <td>{item.kind}</td>
        </tr>
      );
    });

  if (loading) {
    return (
      <div className="loading">
        <Spinner animation="grow" variant="success" />
      </div>
    );
  }

  return (
    <div className="centeredContainer">
      <h1>Posición consolidada</h1>

      {error && (
        <Alert variant="danger" onClose={() => setError(false)} dismissible>
          <p>{errorMessage}</p>
        </Alert>
      )}

      <div className="budgetSummary">
        <p>Total de ingresos: {numeral(totalIncome).format()}</p>
        <p className="redText">
          Total de gastos: {numeral(totalExpenses).format()}
        </p>
        <p
          className={
            totalIncome - totalExpenses > 0
              ? "budgetSummaryResult"
              : "budgetSummaryResult redText"
          }
        >
          Saldo actual: {numeral(totalIncome - totalExpenses).format()}
        </p>
      </div>

      <h2 className="secondaryTitle">Últimos 10 movimientos cargados</h2>

      <Table responsive="md" hover striped size="sm">
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Rubro al que corresponde</th>
            <th>Descripción del movimiento</th>
            <th>Monto</th>
            <th>Tipo</th>
          </tr>
        </thead>
        <tbody className="tableText">{lastEntriesList}</tbody>
      </Table>
    </div>
  );
}

export default Home;
