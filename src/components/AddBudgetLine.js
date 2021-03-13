import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import BudgetDataService from "../services/budget.service.js"

function AddBudgetLine() {
    const initialBudgetState = {
        category: "",
        description: "",
        monthlyLimit: 0,
    };

    const [budget, setBudget] = useState(initialBudgetState);
    const [sent, setSent] = useState(false);

    const handleInput = event => {
        const { name, value } = event.target;
        setBudget({...budget, [name]: value})
    };

    const saveBudget = () => {
        let data = {
            category: budget.category,
            description: budget.description,
            monthlyLimit: budget.monthlyLimit,
        };

        BudgetDataService.create(data)
        .then(response => {

            setSent(true);
            console.log(response.data)
            })
        .catch(error => {
            console.log(error);
        });
    };

    const newBudgetLine = () => {
        setBudget(initialBudgetState);
        setSent(false);
    }

    return (
        <div>
        {sent ? (
            <div>
            <h3>Enviado con éxito</h3>
            <button onClick={newBudgetLine}>Mandar otro</button>
            </div>
            ) : (
                <Container fluid="true">
                <Form>
                <Form.Row className="justify-content-md-center">
                    <Col md={6}>
                <Form.Group>
                <Form.Label>Nombre para el rubro, al que luego referirán los gastos: </Form.Label>
                <Form.Control type="text" value={budget.category} onChange={handleInput} name="category"></Form.Control>
                <Form.Label>Descripción extensa de qué incluye el rubro: </Form.Label>
                <Form.Control type="text" value={budget.description} onChange={handleInput} name="description"></Form.Control>
                <Form.Label>Monto mensual objetivo para el rubro: </Form.Label>
                <Form.Control type="number" value={budget.monthlyLimit} onChange={handleInput} name="monthlyLimit"></Form.Control>
                </Form.Group>
                    </Col>
                </Form.Row>
                <Button onClick={saveBudget}>Guardar</Button>
                </Form>

                </Container>
            )
        }
        </div>
    );

}

export default AddBudgetLine;