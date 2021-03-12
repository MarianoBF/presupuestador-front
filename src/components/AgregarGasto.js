import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import GastoDataService from "../services/gasto.service"

const AgregarGasto = () => {
    const initialGastoState = {
        id: null,
        rubroGasto: "",
        descripcionGasto: "",
        monto: 0,
    };

    const [gasto, setGasto] = useState(initialGastoState);
    const [enviado, setEnviado] = useState(false);

    const handleInput = event => {
        const { name, value } = event.target;
        setGasto({...gasto, [name]: value})
    };

    const guardarGasto = () => {
        let data = {
            rubroGasto: gasto.rubroGasto,
            descripcionGasto: gasto.descripcionGasto,
            monto: gasto.monto,

        };

        GastoDataService.create(data)
        .then(response => {
            setEnviado(true);
            console.log(response.data)
            })
        .catch(error => {
            console.log(error);
        });
    };

    const nuevoGasto = () => {
        setGasto(initialGastoState);
        setEnviado(false);
    }

    return (
        <div>
        {enviado ? (
            <div>
            <h3>Enviado con éxito</h3>
            <button onClick={nuevoGasto}>Mandar otro</button>
            </div>
            ) : (
                <Container fluid="true">
                <Form>
                <Form.Row className="justify-content-md-center">
                    <Col md={6}>
                <Form.Group>
                <Form.Label>Rubro del gasto: </Form.Label>
                <Form.Control type="text" value={gasto.rubroGasto} onChange={handleInput} name="rubroGasto"></Form.Control>
                <Form.Label>Descripción del gasto: </Form.Label>
                <Form.Control type="text" value={gasto.descripcionGasto} onChange={handleInput} name="descripcionGasto"></Form.Control>
                <Form.Label>Monto del gasto: </Form.Label>
                <Form.Control type="number" value={gasto.monto} onChange={handleInput} name="monto"></Form.Control>
                </Form.Group>
                    </Col>
                </Form.Row>
                <Button onClick={guardarGasto}>Guardar</Button>
                </Form>

                </Container>
            )
        }
        </div>
    );

}

export default AgregarGasto;