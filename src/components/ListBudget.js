import Table from 'react-bootstrap/Table';
import { useState, useEffect } from "react";
import EntryDataService from "../services/entry.service";
import BudgetDataService from "../services/budget.service";




function ListBudget() {


  const [ready, setReady] = useState(0);

  const [entries, setEntries] = useState([]);

  useEffect(() => {
      EntryDataService.getAll()
      .then(({data: entries}) => {
        setEntries(entries)
        setReady(ready=>ready+1)

      })
  }, []);
  
  const [budget, setBudget] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    BudgetDataService.getAll()
      .then(({data: budget}) => {
        setBudget(budget);
        setCategories(budget.map(item => item.category));
        setReady(ready=>ready+1)
      })
      
  }, []);

  const [totals, setTotals] = useState([]);

  useEffect(() => {
    if (ready === 2) {
    for (let cat of categories) {
      let belongs = entries.filter((item)=>item.category === cat)
      let sumInc = belongs.filter((item)=>item.kind==="Ingreso").reduce((pre, cur)=>{return pre + cur.amount}, 0)
      let sumExp = belongs.filter((item)=>item.kind==="Egreso").reduce((pre, cur)=>{return pre + cur.amount}, 0)
      let sum = sumInc - sumExp
      setTotals(totals=> [...totals, sum])
      setReady(true)
    }
  }
  // eslint-disable-next-line
}, [ready]);




return (
    <>
      <h1>Presupuesto actual</h1>
 
      <Table responsive hover striped>
            <thead>
            <tr>
                <th>Rubro</th>
                <th>Descripción</th>
                <th>Monto Previsto</th>
                <th>Movimientos Registrados (ingresos-egreso)</th>
                <th>Saldo</th>
            </tr>
        </thead>
        <tbody className="tableText">
    {ready===true && budget.map((item, index) => { return <tr key={item.id}><td>{item.category}</td><td>{item.description}</td><td>{item.monthlyLimit}</td><td>{totals[index]}</td><td className={item.monthlyLimit-totals[index]<0?"redText":""}>{item.monthlyLimit,totals[index]}</td></tr>})}
    <tr>
                <th>Totales:</th>
                <th></th>
                <th>{budget.reduce((pre, cur)=> pre + cur.monthlyLimit, 0)}</th>
                <th>{totals.reduce((pre, cur)=> pre + cur, 0)}</th>
                <th>{budget.reduce((pre, cur)=> pre + cur.monthlyLimit, 0)-totals.reduce((pre, cur)=> pre + cur, 0)}</th>



            </tr>
    
    
    </tbody>
    </Table>


</>
)
}

    export default ListBudget;