import Table from 'react-bootstrap/Table';
import { useState, useEffect } from "react";
import GastoDataService from "../services/gasto.service";
import PresupuestoDataService from "../services/presupuesto.service";



function Presupuesto() {


  const [listo, setListo] = useState(0);

  const [gastos, setGastos] = useState([]);

  useEffect(() => {
      GastoDataService.getAll()
      .then(({data: gastos}) => {
        setGastos(gastos)
        setListo(listo=>listo+1)

      })
  }, []);
  
  const [presupuesto, setPresupuesto] = useState([]);
  const [rubros, setRubros] = useState([]);

  useEffect(() => {
      PresupuestoDataService.getAll()
      .then(({data: presupuesto}) => {
        setPresupuesto(presupuesto);
        setRubros(presupuesto.map(item => item.rubro));
        setListo(listo=>listo+1)
      })
      
  }, []);

  const [totales, setTotales] = useState([]);

  useEffect(() => {
    if (listo === 2) {
    for (let rubro of rubros) {
      let corresponde = gastos.filter((item)=>item.rubroGasto === rubro)
      let suma = corresponde.reduce((ant, act)=>{return ant + act.monto}, 0)
      setTotales(totales=> [totales, suma])
      console.log(totales)
    }
  }
}, [listo]);

return (
    <>
      <h4>Presupuesto actual</h4>
      <Table responsive hover striped>
            <thead>
            <tr>
                <th>#</th>
                <th>Rubro</th>
                <th>Monto Mensual</th>
                <th>Gasto Mensual</th>
                <th>Saldo</th>
            </tr>
        </thead>
        <tbody className="tableText">
    {presupuesto && presupuesto.map((item, index) => { return <tr key={item.id}><td>{item.id}</td><td>{item.rubro}</td><td>{item.monto_mensual}</td><td>{totales[index]}</td><td>{item.monto_mensual-totales[index]>0?item.monto_mensual-totales[index]:"Se acabó"}</td></tr>})}
    <tr>
                <th>Total:</th>
                <th>1</th>
                <th>1</th>
                <th>1</th>
                <th>1</th>


            </tr>
    
    
    </tbody>
    </Table>
</>
)
}

    export default Presupuesto;