import './App.css';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css"
import ListarGastos from "./components/ListarGastos"
import AgregarGasto from './components/AgregarGasto';


function App() {

function handler(){
  console.log(traer())
}

  async function traer() {
    const respuesta = await axios.post("http://localhost:3000/usuario",{
      nombre: "Juan",
      apellido: "Perez"
    })
    return respuesta
  }



  return (
    <div className="App">
      <button onClick={handler}>Prueba</button>
      <nav className="navbar navbar-expand">
      <a href="/gastos">gastos</a>
      </nav>
      {/* <Listarastos /> */}
      <AgregarGasto />
    </div>
  );
}

export default App;
