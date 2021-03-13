import EntryDataService from "../services/entry.service";
import { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';
import '../App.css';

function ListarGastos() {

    const [entries, setEntry] = useState([]);

useEffect(() => {
    EntryDataService.getAll()
    .then(({data: entryList}) => {
        setEntry(entryList)
    })
}, []);

    const handleEdit = (id) => {
        console.log("a",id)
    }


  return( 
    <div>
    <h4>Los últimos gastos cargados</h4>
      <Table responsive hover striped>
            <thead>
            <tr>
                <th>Fecha</th>
                <th>Rubro al que corresponde</th>
                <th>Descripción del gasto</th>
                <th>Monto</th>
                <th>Tipo (ingreso/egreso)</th>
                <th>Editar</th>

            </tr>
        </thead>
        <tbody className="tableText">
    {entries && entries.map((item) => { return <tr key={item.id}><td>{item.date}</td><td>{item.category}</td><td>{item.description}</td><td>{item.amount}</td><td>{item.kind}</td><td onClick={()=>handleEdit(item.id)}>Editar</td></tr>})}
    </tbody>
    </Table>
    </div>
    )
}

export default ListarGastos;