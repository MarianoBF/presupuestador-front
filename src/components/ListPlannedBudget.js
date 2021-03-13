import BudgetDataService from "../services/budget.service";
import { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';
import '../App.css';

function ListPlannedBudget() {

    const [budget, setBudget] = useState([]);

useEffect(() => {
    BudgetDataService.getAll()
    .then(({data: budget}) => {
        setBudget(budget)
    })
}, []);

  return( 
    <div>
    <h4>Presupuesto</h4>
      <Table responsive hover striped>
            <thead>
            <tr>
                <th>Rubro</th>
                <th>Descripción</th>
                <th>Monto Mensual</th>

            </tr>
        </thead>
        <tbody className="tableText">
    {budget && budget.map((item) => { return <tr key={item.id}><td>{item.category}</td><td>{item.description}</td><td>{item.monthlyLimit}</td></tr>})}
    <tr>
                <th>Total:</th>
                <th></th>
                <th>{budget.reduce(function(pre, act){return pre + act.monthlyLimit;}, 0)}</th>

            </tr>
    
    
    </tbody>
    </Table>
    </div>
    )
}

export default ListPlannedBudget;