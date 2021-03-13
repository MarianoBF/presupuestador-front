import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import EntryDataService from "../services/entry.service"

const AddEntry = () => {
    const initialEntryState = {
        date: "",
        category: "",
        description: "",
        amount: 0,
        kind: "",
    };

    const [entry, setEntry] = useState(initialEntryState);
    const [sent, setSent] = useState(false);

    const handleInput = event => {
        const { name, value } = event.target;
        setEntry({...entry, [name]: value})
    };

    const saveEntry = () => {
        let data = {
            date: entry.date,
            category: entry.category,
            description: entry.description,
            amount: entry.amount,
            kind: entry.kind,
        };

        EntryDataService.create(data)
        .then(response => {
            setSent(true);
            console.log(response.data)
            })
        .catch(error => {
            console.log(error);
        });
    };

    const newEntry = () => {
        setEntry(initialEntryState);
        setSent(false);
    }

    return (
        <div>
        {sent ? (
            <div>
            <h3>Enviado con éxito</h3>
            <button onClick={newEntry}>Mandar otro</button>
            </div>
            ) : (
                <Container fluid="true">
                <Form>
                <Form.Row className="justify-content-md-center">
                    <Col md={6}>
                <Form.Group>
                <Form.Label>Fecha del movimiento: </Form.Label>
                <Form.Control type="date" value={entry.date} onChange={handleInput} name="date"></Form.Control>
                <Form.Label>Concepto del movimiento: </Form.Label>
                <Form.Control type="text" value={entry.category} onChange={handleInput} name="category"></Form.Control>
                <Form.Label>Observaciones del movimiento: </Form.Label>
                <Form.Control type="text" value={entry.description} onChange={handleInput} name="description"></Form.Control>
                <Form.Label>Monto del movimiento: </Form.Label>
                <Form.Control type="number" value={entry.amount} onChange={handleInput} name="amount"></Form.Control>
                <Form.Label>Tipo de movimiento (egreso/ingreso): </Form.Label>
                <Form.Control as="select" value={entry.kind} onChange={handleInput} name="kind">
                    <option value="Ingreso">Ingreso</option>
                    <option value="Egreso">Egreso</option>
                </Form.Control>
                </Form.Group>
                    </Col>
                </Form.Row>
                <Button onClick={saveEntry}>Guardar</Button>
                </Form>

                </Container>
            )
        }
        </div>
    );

}

export default AddEntry;