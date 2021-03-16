import EntryDataService from "../services/entry.service";
import React, { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';
import '../App.css';

function Home() {

    const [entries, setEntries] = useState([]);
    const [totalExpenses, setTotalExpenses] = useState(0);
    const [totalIncome, setTotalIncome] = useState(0);


useEffect(() => {
    EntryDataService.getAll()
    .then(({data: entryList}) => {
        setEntries(entryList)
        setTotalExpenses(entryList.filter((item)=>item.kind==="Egreso").reduce((pre, cur) => {return pre + cur.amount}, 0))
        setTotalIncome(entryList.filter((item)=>item.kind==="Ingreso").reduce((pre, cur) => {return pre + cur.amount}, 0))
    })
}, []);

  return( 
    <div className="centeredContainer">
    <h1>Posición consolidada</h1>


    <div className="budgetSummary">
    <p>Total de ingresos: {totalIncome}</p>
    <p className="redText">Total de gastos: {totalExpenses}</p>
    <p className={totalIncome-totalExpenses>0?"budgetSummaryResult":"budgetSummaryResult redText"}>Saldo actual: {totalIncome-totalExpenses}</p>

    </div>

    <h2>Últimos 10 movimientos cargados</h2>

   <Table responsive hover striped>
            <thead>
            <tr>
                <th>Fecha</th>
                <th>Rubro al que corresponde</th>
                <th>Descripción del gasto</th>
                <th>Monto</th>
            </tr>
        </thead>
        <tbody className="tableText">
    
        {entries.sort((a,b)=>a.createdAt<b.createdAt?1:-1).slice(0,10).map((item) => { return <tr key={item.id}><td>{item.date.slice(0,10)}</td><td>{item.category}</td><td>{item.description}</td><td>{item.amount}</td></tr>})}
    </tbody>
    </Table>
    </div>
    )
}

export default Home;