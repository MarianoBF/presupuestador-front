import EntryDataService from "../services/entry.service";
import React, { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import '../App.css';

function ListEntries() {

    const [expenses, setExpenses] = useState([]);
    const [incomes, setIncomes] = useState([]);
    const [showIncome, setShowIncome] = useState(false);
    const [editing, setEditing] = useState(false);


useEffect(() => {
    EntryDataService.getAll()
    .then(({data: entryList}) => {
        setExpenses(entryList.filter((item)=>item.kind === "Egreso"))
        setIncomes(entryList.filter((item)=>item.kind === "Ingreso"))
    })
}, []);

    const [entry, setEntry] = useState();

    const handleEditClick = (id) => {
        showIncome?setEntry(incomes.filter((item)=>item.id === id)[0]):setEntry(expenses.filter((item)=>item.id === id)[0])
        setEditing(true);
    }

    const handleInput = event => {
        const { name, value } = event.target;
        setEntry({...entry, [name]: value})
    };


    const saveEdit = () => {
        try {let data = {
            id: entry.id,
            date: entry.date,
            category: entry.category,
            description: entry.description,
            amount: entry.amount,
            kind: entry.kind,
        };
        EntryDataService.update(data.id, data)
        .then(response => {
            setEditing(false);
            console.log(response.data)
            })
        .catch(error => {
            console.log(error);
        });}
        finally {
            setEditing(false);
            setEntry();
            window.location.reload()
        }
    };

    const cancelEdit = () => {
        setEditing(false);
        setEntry();
    };

    const changeKind = () => {
        setShowIncome(!showIncome);
    }

  return( 
    <div>
    {!editing?<header>
        <h4>Listado de {showIncome?"ingresos":"gastos"} cargados</h4>
        <Button onClick={changeKind} variant="primary"> Mejor mostrame los {showIncome?"Gastos":"Ingresos"}</Button>
       
    </header> : null}
    {editing? 
    <div> {//onChange={handleInput}}
    } 
        Fecha: <input value={entry.date.slice(0,10)} onChange={handleInput} type="date" name="date"/>
        Rubro: <input value={entry.category} onChange={handleInput} type="text" name="category"/>
        Descripción: <input value={entry.description} onChange={handleInput} type="text" name="description"/>
        Monto: <input value={entry.amount} onChange={handleInput} type="number" name="amount"/>
        <br />
        <Button onClick={saveEdit} variant="primary"> Guardar Edición</Button>{' '}
        <Button onClick={cancelEdit} variant="secondary"> Cancelar Edición</Button>

    </div>
    :null}

    {(editing === false) ? <>
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
        incomes.map((item) => { return <tr key={item.id}><td>{item.date}</td><td>{item.category}</td><td>{item.description}</td><td>{item.amount}</td><td className="editCell" onClick={()=>handleEditClick(item.id)}>Editar</td></tr>}) :
        expenses.map((item) => { return <tr key={item.id}><td>{item.date}</td><td>{item.category}</td><td>{item.description}</td><td>{item.amount}</td><td className="editCell" onClick={()=>handleEditClick(item.id)}>Editar</td></tr>})
        }
    </tbody>
    </Table>
        </>:null}
    </div>
    )
}

export default ListEntries;