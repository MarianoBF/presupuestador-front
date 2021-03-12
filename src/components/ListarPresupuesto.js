import PresupuestoDataService from "../services/presupuesto.service";
import { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';
import '../App.css';

function ListarGastos() {

    const [texto, setTexto] = useState([]);

useEffect(() => {
    PresupuestoDataService.getAll()
    .then(({data: presupuesto}) => {
        setTexto(presupuesto)
    })
}, []);

  return( 
    <div>
    <h4>Presupuesto</h4>
      <Table responsive hover striped>
            <thead>
            <tr>
                <th>#</th>
                <th>Descripción</th>
                <th>Rubro</th>
                <th>Monto Mensual</th>

            </tr>
        </thead>
        <tbody className="tableText">
    {texto && texto.map((item) => { return <tr key={item.id}><td>{item.id}</td><td>{item.rubro}</td><td>{item.descripcion}</td><td>{item.monto_mensual}</td></tr>})}
    <tr>
                <th>Total:</th>
                <th></th>
                <th></th>
                <th>{texto.reduce(function(ant, act){return ant + act.monto_mensual;}, 0)}</th>

            </tr>
    
    
    </tbody>
    </Table>
    </div>
    )
}

export default ListarGastos;