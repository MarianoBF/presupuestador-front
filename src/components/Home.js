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
    <div>
    <header>
        <h3>Tu saldo actual y 10 últimos movimientos cargados</h3>
    </header>

    <p>Total de gastos: {totalExpenses}</p>
    <p>Total de ingresos: {totalIncome}</p>
    <p className={totalIncome-totalExpenses>0?"":"resultCell"}>Saldo actual: {totalIncome-totalExpenses}</p>

    <h4>Últimos movimientos cargados</h4>

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