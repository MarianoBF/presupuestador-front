import Table from 'react-bootstrap/Table';
import { useState, useEffect } from "react";
import EntryDataService from "../services/entry.service";
import BudgetDataService from "../services/budget.service";
import Button from 'react-bootstrap/Button';
import { SAMPLEENTRIES, SAMPLEBUDGET } from './SampleData';



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
      console.log(belongs)
      let sum = belongs.reduce((pre, act)=>{return pre + act.amount}, 0)
      setTotals(totals=> [...totals, sum])
    }
    console.log(totals)
  }
  // eslint-disable-next-line
}, [ready]);

const loadSampleData = () => {

  for (let i of SAMPLEENTRIES) {

  let data = {
    date: i.date,
    category: i.category,
    description: i.description,
    amount: i.amount,
    kind: i.kind,
    };

    EntryDataService.create(data)
    .then(response => {
        console.log(response.data)
        })
    .catch(error => {
        console.log(error);
    });
    };

  for (let i of SAMPLEBUDGET) {

    let data = {
      category: i.category,
      description: i.description,
      monthlyLimit: i.monthlyLimit,
      };
  
      BudgetDataService.create(data)
      .then(response => {
          console.log(response.data)
          })
      .catch(error => {
          console.log(error);
      });
      };

      // window.location.reload();

  }

  const deleteData = () => {
    let checkDelete = window.confirm("Esto es irreversible, vas a borrar todos los datos y no se puede recuperar, ¿estás seguro?");
    if (checkDelete === true) {
    BudgetDataService.deleteAll();
    EntryDataService.deleteAll();
    window.location.reload();
  }
  }


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

    <Button onClick={loadSampleData} variant="secondary">Cargar datos de prueba</Button>{' '}
    <Button onClick={deleteData} variant="danger">Borrar todos los datos</Button>

</>
)
}

    export default ListCurrentBudget;