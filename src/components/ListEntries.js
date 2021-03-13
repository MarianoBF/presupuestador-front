import EntryDataService from "../services/entry.service";
import { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import '../App.css';

function ListEntries() {

    const [expenses, setExpenses] = useState([]);
    const [incomes, setIncomes] = useState([]);
    const [showIncome, setShowIncome] = useState(false);


useEffect(() => {
    EntryDataService.getAll()
    .then(({data: entryList}) => {
        setExpenses(entryList.filter((item)=>item.kind === "Egreso"))
        setIncomes(entryList.filter((item)=>item.kind === "Ingreso"))
    })
}, []);

    const handleEdit = (id) => {
        console.log("a",id)
    }

    const changeKind = () => {
        setShowIncome(!showIncome);
    }


  return( 
    <div>
    <h4>Los últimos {showIncome?"ingresos":"gastos"} cargados</h4>

    <Button onClick={changeKind} variant="primary"> Mejor mostrame los {showIncome?"Gastos":"Ingresos"}</Button>

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
    {showIncome ?
        incomes.map((item) => { return <tr key={item.id}><td>{item.date}</td><td>{item.category}</td><td>{item.description}</td><td>{item.amount}</td><td onClick={()=>handleEdit(item.id)}>Editar</td></tr>}) :
        expenses.map((item) => { return <tr key={item.id}><td>{item.date}</td><td>{item.category}</td><td>{item.description}</td><td>{item.amount}</td><td onClick={()=>handleEdit(item.id)}>Editar</td></tr>})
        }
    </tbody>
    </Table>
    </div>
    )
}

export default ListEntries;