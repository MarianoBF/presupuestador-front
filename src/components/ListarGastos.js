import GastoDataService from "../services/gasto.service";
import { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';
import '../App.css';

function ListarGastos() {

    const [texto, setTexto] = useState([]);

useEffect(() => {
    GastoDataService.getAll()
    .then(({data: gastos}) => {
        setTexto(gastos)
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
                <th>#</th>
                <th>Descripción</th>
                <th>Rubro al que corresponde</th>
                <th>Monto</th>
                <th>Editar</th>

            </tr>
        </thead>
        <tbody className="tableText">
    {texto && texto.map((item) => { return <tr key={item.id}><td>{item.id}</td><td>{item.descripcionGasto}</td><td>{item.rubroGasto}</td><td>{item.monto}</td><td onClick={()=>handleEdit(item.id)}>Editar</td></tr>})}
    </tbody>
    </Table>
    </div>
    )
}

export default ListarGastos;