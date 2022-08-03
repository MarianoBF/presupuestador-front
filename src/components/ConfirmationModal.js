import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export default function ConfirmationModal({show, message, handleCancel, handleOK}) {
  return (
    <Modal
      show={show}
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
        <p>{message}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCancel}>
          Cancelar
        </Button>
        <Button variant="primary" onClick={handleOK}>
          Confirmar
        </Button>{" "}
      </Modal.Footer>
    </Modal>
  );
}
