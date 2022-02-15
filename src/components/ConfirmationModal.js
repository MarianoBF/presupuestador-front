import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export default function ConfirmationModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal de Confirmación
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{props.message}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleCancel}>
          Cancelar
        </Button>
        <Button variant="primary" onClick={props.handleOK}>
          Confirmar
        </Button>{" "}
      </Modal.Footer>
    </Modal>
  );
}
