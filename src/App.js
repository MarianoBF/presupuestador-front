import './App.css';
import axios from 'axios'

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
    </div>
  );
}

export default App;
