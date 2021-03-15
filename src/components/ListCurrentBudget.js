import Table from 'react-bootstrap/Table';
import { useState, useEffect } from "react";
import EntryDataService from "../services/entry.service";
import BudgetDataService from "../services/budget.service";




function ListCurrentBudget() {


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
      let sum = belongs.reduce((pre, cur)=>{return pre + cur.amount}, 0)
      setTotals(totals=> [...totals, sum])
    }
  }
  // eslint-disable-next-line
}, [ready]);




return (
    <>
      <h4>Presupuesto actual</h4>
 
      <Table responsive hover striped>
            <thead>
            <tr>
                <th>Rubro</th>
                <th>Monto Mensual</th>
                <th>Gasto Mensual</th>
                <th>Saldo</th>
            </tr>
        </thead>
        <tbody className="tableText">
    {budget && budget.map((item, index) => { return <tr key={item.id}><td>{item.category}</td><td>{item.monthlyLimit}</td><td>{totals[index]}</td><td>{item.monthlyLimit-totals[index]}</td></tr>})}
    <tr>
                <th>Total:</th>
                <th></th>
                <th></th>
                <th></th>


            </tr>
    
    
    </tbody>
    </Table>


</>
)
}

    export default ListCurrentBudget;