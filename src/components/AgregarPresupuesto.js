import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import PresupuestoDataService from "../services/presupuesto.service.js"

function AgregarPresupuesto() {
    const initialPresupuestoState = {
        id: null,
        rubro: "",
        descripcion: "",
        monto_mensual: 0,
    };

    const [presupuesto, setPresupuesto] = useState(initialPresupuestoState);
    const [enviado, setEnviado] = useState(false);

    const handleInput = event => {
        const { name, value } = event.target;
        setPresupuesto({...presupuesto, [name]: value})
    };

    const guardarPresupuesto = () => {
        let data = {
            rubro: presupuesto.rubro,
            descripcion: presupuesto.descripcion,
            monto_mensual: presupuesto.monto_mensual,
        };

        PresupuestoDataService.create(data)
        .then(response => {

            setEnviado(true);
            console.log(response.data)
            })
        .catch(error => {
            console.log(error);
        });
    };

    const nuevoPresupuesto = () => {
        setPresupuesto(initialPresupuestoState);
        setEnviado(false);
    }

    return (
        <div>
        {enviado ? (
            <div>
            <h3>Enviado con éxito</h3>
            <button onClick={nuevoPresupuesto}>Mandar otro</button>
            </div>
            ) : (
                <Container fluid="true">
                <Form>
                <Form.Row className="justify-content-md-center">
                    <Col md={6}>
                <Form.Group>
                <Form.Label>Nombre para el rubro, al que luego referirán los gastos: </Form.Label>
                <Form.Control type="text" value={presupuesto.rubro} onChange={handleInput} name="rubro"></Form.Control>
                <Form.Label>Descripción del rubro, si no quedó claro con el nombre: </Form.Label>
                <Form.Control type="text" value={presupuesto.descripcion} onChange={handleInput} name="descripcion"></Form.Control>
                <Form.Label>Monto mensual objetivo para el rubro: </Form.Label>
                <Form.Control type="number" value={presupuesto.monto_mensual} onChange={handleInput} name="monto_mensual"></Form.Control>
                </Form.Group>
                    </Col>
                </Form.Row>
                <Button onClick={guardarPresupuesto}>Guardar</Button>
                </Form>

                </Container>
            )
        }
        </div>
    );

}

export default AgregarPresupuesto;