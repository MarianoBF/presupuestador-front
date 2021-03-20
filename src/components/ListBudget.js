import Table from "react-bootstrap/Table";
import { useState, useEffect } from "react";
import EntryDataService from "../services/entry.service";
import BudgetDataService from "../services/budget.service";
import numeral from "numeral";
// eslint-disable-next-line
import es from "numeral/locales/es";

function ListBudget() {
  numeral.locale("es");
  numeral.defaultFormat("$0,0.00");

  const [ready, setReady] = useState(0);

  const [entries, setEntries] = useState([]);

  useEffect(() => {
    EntryDataService.getAll()
      .then(({ data: entries }) => {
        setEntries(entries);
        setReady((ready) => ready + 1);
      })
      .catch(() => console.log("No se ha podido conectar al servidor"));
  }, []);

  const [budget, setBudget] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    BudgetDataService.getAll()
      .then(({ data: budget }) => {
        setBudget(budget);
        setCategories(budget.map((item) => item.category));
        setReady((ready) => ready + 1);
      })
      .catch(() => console.log("No se ha podido conectar al servidor"));
  }, []);

  const [totals, setTotals] = useState([]);

  useEffect(() => {
    if (ready === 2) {
      for (let cat of categories) {
        let belongs = entries.filter((item) => item.category === cat);
        let sumInc = belongs
          .filter((item) => item.kind === "Ingreso")
          .reduce((pre, cur) => {
            return pre + cur.amount;
          }, 0);
        let sumExp = belongs
          .filter((item) => item.kind === "Egreso")
          .reduce((pre, cur) => {
            return pre + cur.amount;
          }, 0);
        let sum = sumInc - sumExp;
        setTotals((totals) => [...totals, sum]);
        setReady(true);
      }
    }
    // eslint-disable-next-line
  }, [ready]);

  const handleDeleteClick = (id, category) => {
    let hasItems = entries.filter((item) => item.category === category);
    if (hasItems.length === 0) {
      BudgetDataService.delete(id)
        .then((response) => {
          console.log(response.data);
        })
        .catch(() => console.log("No se ha podido borrar la categoría"));

      window.location.reload();
    } else {
      window.alert(
        "Esta categoría aún tiene movimientos. Se deben borrar todos los movimientos de la categoría para poder borrarla."
      );
    }
  };

  const budgetListing = budget.map((item, index) => {
    return (
      <tr key={item.id}>
        <td>{item.category}</td>
        <td>{item.description}</td>
        <td>{numeral(item.limit).format()}</td>
        <td>{numeral(totals[index]).format()}</td>
        <td className={item.limit - totals[index] < 0 ? "redText" : ""}>
          {numeral(item.limit - totals[index]).format()}
        </td>
        <td
          className="deleteCell"
          onClick={() => handleDeleteClick(item.id, item.category)}
        >
          Borrar
        </td>
      </tr>
    );
  });

  const totalBudgeted = numeral(
    budget.reduce((pre, cur) => pre + cur.limit, 0)
  ).format();

  const totalEntriesResult = numeral(
    totals.reduce((pre, cur) => pre + cur, 0)
  ).format();

  const totalResultsDifference = numeral(
    budget.reduce((pre, cur) => pre + cur.limit, 0) -
      totals.reduce((pre, cur) => pre + cur, 0)
  ).format();

  return (
    <>
      <h1>Presupuesto actual</h1>

      <Table responsive="md" striped size="sm">
        <thead>
          <tr>
            <th>Rubro</th>
            <th>Descripción</th>
            <th>Monto Previsto</th>
            <th>Movimientos Registrados (ingresos-egreso)</th>
            <th>Diferencia</th>
            <th>Borrar</th>
          </tr>
        </thead>
        <tbody className="tableText">
          {ready === true && budgetListing}
          <tr>
            <th>Totales:</th>
            <th></th>
            <th>{totalBudgeted}</th>
            <th>{totalEntriesResult}</th>
            <th>{totalResultsDifference}</th>
            <th></th>
          </tr>
        </tbody>
      </Table>
    </>
  );
}

export default ListBudget;
