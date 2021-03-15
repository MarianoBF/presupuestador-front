import EntryDataService from "../services/entry.service";
import React, { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';
import '../App.css';

function Home() {

    const [entries, setEntries] = useState([]);

useEffect(() => {
    EntryDataService.getAll()
    .then(({data: entryList}) => {
        setEntries(entryList.filter((item)=>item.kind === "Egreso"))
    })
}, []);


  return( 
    <div>
    <header>
        <h4>Listado de los 10 últimos movimientos cargados</h4>
       
    </header>
   <Table responsive hover striped>
            <thead>
            <tr>
                <th>Fecha</th>
                <th>Rubro al que corresponde</th>
                <th>Descripción del gasto</th>
                <th>Monto</th>
                <th>Editar</th>

            </tr>
        </thead>
        <tbody className="tableText">
    
        {entries.slice(0,10).map((item) => { return <tr key={item.id}><td>{item.date}</td><td>{item.category}</td><td>{item.description}</td><td>{item.amount}</td><td className="editCell">Editar</td></tr>})}
    </tbody>
    </Table>
    </div>
    )
}

export default Home;