import GastoDataService from "../services/tutorial.service"

function ListarGastos() {

    const Texto = GastoDataService.getAll().then(response => response.map(item => { return <li>{item}</li>}))

   return( 
    <div>
    {Texto}
    </div>
    )
}

export default ListarGastos;