import GastoDataService from "../services/tutorial.service"
import { useState, useEffect } from "react";

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
    <h4>Probando</h4>
    {texto && texto.map((item) => { return <li id={item.id}>{item.rubro}</li>})}
    </div>
    )
}

export default ListarGastos;