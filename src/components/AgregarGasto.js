import React, {useState} from "react";
import GastoDataService from "../services/tutorial.service"

const AgregarGasto = () => {
    const initialGastoState = {
        id: null,
        rubro: "",
        descripcion: "",
        published: false
    };

    const [gasto, setGasto] = useState(initialGastoState);
    const [enviado, setEnviado] = useState(false);

    const handlerInput = event => {
        const { name, value } = event.target;
        setGasto({...gasto, [name]: value})
    };

    const guardarGasto = () => {
        let data = {
            rubro: gasto.rubro,
            descripcion: gasto.descripcion
        };

        GastoDataService.create(data)
        .then(response => {
            setGasto({
                id: response.data.id,
                rubro: response.data.rubro,
                descripcion: response.data.description,
                pagado: response.data.pagado
            });
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
                <div>
                <input type="text" value={gasto.rubro} onChange={handlerInput} name="rubro"/>
                <input type="text" value={gasto.descripcion} onChange={handlerInput} name="descripcion" />
                <button onClick={guardarGasto}>Guardar</button>
                </div>
            )
        }
        </div>
    );

}

export default AgregarGasto;