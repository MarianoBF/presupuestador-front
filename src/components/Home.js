import EntryDataService from "../services/entry.service";
import { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import "../App.css";
import numeral from "numeral";
// eslint-disable-next-line
import es from "numeral/locales/es";

function Home() {
  numeral.locale("es");
  numeral.defaultFormat("$0,0.00");

  const [entries, setEntries] = useState([]);
  const [totalExpenses, setTotalExpenses] = useState(0);
  const [totalIncome, setTotalIncome] = useState(0);

  useEffect(() => {
    EntryDataService.getAll()
      .then(({ data: entryList }) => {
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
      })
      .catch((error) =>
        console.log(
          "No se pudo cargar la información de los movimientos",
          error
        )
      );
  }, []);

  const lastEntriesList = entries
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

  return (
    <div className="centeredContainer">
      <h1>Posición consolidada</h1>

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
