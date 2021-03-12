import GastoDataService from "../services/tutorial.service";
import { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';

function ListarGastos() {

    const [texto, setTexto] = useState([]);


const Texto2 = GastoDataService.getAll().then(response => console.log(response.data))

if (Texto2.length > 1) {setTexto( GastoDataService.getAll().then(response => response.data) ) }

useEffect(() => {
    GastoDataService.getAll()
    .then(({data: gastos}) => {
        setTexto(gastos)
    })
}, []);


  return( 
    <div>
    <h4>Los últimos gastos cargados</h4>
      <Table>
            <thead>
            <tr>
                <th>#</th>
                <th>Rubro</th>
                <th>Descripción</th>
                <th>Username</th>
            </tr>
        </thead>
        <tbody>
    {texto && texto.map((item) => { return <tr id={item.id}><td>{item.id}</td><td>{item.descripcion}</td><td>{item.rubro}</td></tr>})}
    </tbody>
    </Table>
    </div>
    )
}

export default ListarGastos;