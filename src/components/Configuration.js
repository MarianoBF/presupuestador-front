import Button from 'react-bootstrap/Button';
import { SAMPLEENTRIES, SAMPLEBUDGET } from './SampleData';
import EntryDataService from "../services/entry.service";
import BudgetDataService from "../services/budget.service";


function Configuration() {
    const loadSampleData = () => {

        for (let i of SAMPLEENTRIES) {
      
        let data = {
          date: i.date,
          category: i.category,
          description: i.description,
          amount: i.amount,
          kind: i.kind,
          };
      
          EntryDataService.create(data)
          .then(response => {
              console.log(response.data)
              })
          .catch(error => {
              console.log(error);
          });
          };
      
        for (let i of SAMPLEBUDGET) {
      
          let data = {
            category: i.category,
            description: i.description,
            monthlyLimit: i.monthlyLimit,
            };
        
            BudgetDataService.create(data)
            .then(response => {
                console.log(response.data)
                })
            .catch(error => {
                console.log(error);
            });
            };
      
            window.location.reload();
      
        }
      
        const deleteData = () => {
          let checkDelete = window.confirm("Esto es irreversible, vas a borrar todos los datos y no se puede recuperar, ¿estás seguro?");
          if (checkDelete === true) {
          BudgetDataService.deleteAll();
          EntryDataService.deleteAll();
          window.location.reload();
        }
        }


    return(
        <div className="centeredContainer">

    <h1>Opciones de configuración</h1>

    <Button className="spacedButton" onClick={loadSampleData} variant="secondary">Cargar datos de prueba</Button>{' '}
    
    
    <Button className="spacedButton" onClick={deleteData} variant="danger">Borrar todos los datos</Button>
        </div>
    )
}

export default Configuration;