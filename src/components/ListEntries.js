import EntryDataService from "../services/entry.service";
import BudgetDataService from "../services/budget.service"
import React, { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from "react-bootstrap/Form";
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


    const handleDeleteClick = (id) => {
        EntryDataService.delete(id)
        .then(response => {
            console.log(response.data)
            })
        .catch(error => {
            console.log(error);
        });
           window.location.reload()
    }

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
            setEntry(undefined);
            window.location.reload()
        }
    };

    const cancelEdit = () => {
        setEditing(false);
        setEntry(undefined);
    };

    const changeKind = () => {
        setShowIncome(!showIncome);
    }
    
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        BudgetDataService.getAll()
          .then(({data: budget}) => {
            setCategories(budget.map(item => item.category));
          })     
      }, []);

    const [selectedCategory, setSelectedCategory] = useState();
    const [activeFilter, setActiveFilter] = useState(false);

    const handleCategorySelection = (event) => {
        setActiveFilter(true)
        setSelectedCategory(event.target.value)
    }

    const cancelFilter = () => {
        setActiveFilter(false)
        setSelectedCategory("")
        window.location.reload()
    }

  return( 
    <div>
    {!editing?<header>
        <h4>Listado de {showIncome?"ingresos":"gastos"} cargados</h4>
        <Button onClick={changeKind} variant="primary"> Mejor mostrame los {showIncome?"Gastos":"Ingresos"}</Button>
       
        <Form>
            <Form.Label>Filtrame por el siguiente Rubro: </Form.Label>
            <Form.Control as="select" value={selectedCategory} onChange={handleCategorySelection} name="category">
            <option></option>
                {categories.map((item) => { return <option key={item}>{item}</option>})}                
            </Form.Control>
         <Button onClick={cancelFilter} variant="secondary"> Resetear Filtro</Button> 
        </Form>

    </header> : null}
    {editing? 
    <div> {
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
                <th>Borrar</th>

            </tr>
        </thead>
        <tbody className="tableText">
        {activeFilter === true ? 
        showIncome ?
        incomes.filter((itemF)=>itemF.category===selectedCategory).map((item) => { return <tr key={item.id}><td>{item.date}</td><td>{item.category}</td><td>{item.description}</td><td>{item.amount}</td><td className="editCell" onClick={()=>handleEditClick(item.id)}>Editar</td><td className="deleteCell" onClick={()=>handleDeleteClick(item.id)}>Borrar</td></tr>}) :
        expenses.filter((itemF)=>itemF.category===selectedCategory).map((item) => { return <tr key={item.id}><td>{item.date}</td><td>{item.category}</td><td>{item.description}</td><td>{item.amount}</td><td className="editCell" onClick={()=>handleEditClick(item.id)}>Editar</td><td className="deleteCell" onClick={()=>handleDeleteClick(item.id)}>Borrar</td></tr>})
        : 
        showIncome ?
        incomes.map((item) => { return <tr key={item.id}><td>{item.date}</td><td>{item.category}</td><td>{item.description}</td><td>{item.amount}</td><td className="editCell" onClick={()=>handleEditClick(item.id)}>Editar</td><td className="deleteCell" onClick={()=>handleDeleteClick(item.id)}>Borrar</td></tr>}) :
        expenses.map((item) => { return <tr key={item.id}><td>{item.date}</td><td>{item.category}</td><td>{item.description}</td><td>{item.amount}</td><td className="editCell" onClick={()=>handleEditClick(item.id)}>Editar</td><td className="deleteCell" onClick={()=>handleDeleteClick(item.id)}>Borrar</td></tr>})
        }
    </tbody>
    </Table>
        </>:null}
    </div>
    )
}

export default ListEntries;