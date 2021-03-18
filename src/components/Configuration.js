import Button from 'react-bootstrap/Button';
import { SAMPLEENTRIES, SAMPLEBUDGET } from './SampleData';
import EntryDataService from "../services/entry.service";
import BudgetDataService from "../services/budget.service";
import { useState } from "react";


function Configuration() {

const [loaded, setLoaded] = useState(false)
const [notLoaded, setNotLoaded] = useState(false)


    const loadSampleData = () => {
        let entryFlag = true;
        for (let i of SAMPLEBUDGET) {
      
          let data = {
            category: i.category,
            description: i.description,
            monthlyLimit: i.monthlyLimit,
            };
        
            BudgetDataService.create(data)
            // eslint-disable-next-line no-loop-func
            .then(res => {
                console.log("OK")
                if (entryFlag === true) {
                for (let i of SAMPLEENTRIES) {
                    
                    let data = {
                      date: i.date,
                      category: i.category,
                      description: i.description,
                      amount: i.amount,
                      kind: i.kind,
                      };
                  
                      EntryDataService.create(data)
                      .then(res => {
                          console.log("OK")
                          setLoaded(true)
                          })
                      .catch(error => {
                          console.log(error);
                          setNotLoaded(true)
                      });
                      };
                      entryFlag = false;
                    }
                })
            .catch(error => {
                console.log(error);
                setNotLoaded(true)
            });
            };
            


                 
                  
        }
      
        const deleteData = () => {
          let checkDelete = window.confirm("Esto es irreversible, vas a borrar todos los datos y no se puede recuperar, ¿estás seguro?");
          if (checkDelete === true) {
          try {
            BudgetDataService.deleteAll();
            EntryDataService.deleteAll(); 
          } catch {
              console.log("No se pudieron borrar los datos")
          } finally {
          window.location.reload();
        }}
        }


    return(
        <div className="centeredContainer">

    <h1>Opciones de configuración</h1>

    <Button className="spacedButton" onClick={loadSampleData} variant="secondary">Cargar datos de prueba</Button>{' '}
    
    
    <Button className="spacedButton" onClick={deleteData} variant="danger">Borrar todos los datos</Button>
     
     {loaded && <p className="blueText">Datos de prueba cargados exitosamente.</p>}
     {notLoaded && <p className="redText">No se han podido cargar datos de prueba, ya están cargados o se ha producido un error.</p>}

     
        </div>
    )
}

export default Configuration;