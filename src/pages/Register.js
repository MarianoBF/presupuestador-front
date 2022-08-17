import { useState, useRef } from "react";
import {useHistory} from "react-router-dom";
import "../App.css";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import authService from "../services/auth.service";
import useMounted from "../hooks/useMounted";

function Register() {
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState(''); 
  const timer = useRef(true);
  const isMounted = useMounted();
  const history = useHistory();

  const initialUserState = {
    email: "",
    password: "",
    passwordConfirm: "",
  };

  const [user, setUser] = useState(initialUserState);

  const handleInput = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleLogin = () => {
    history.push("/login")
  }

  const startRegister = (e) => {
    e.preventDefault();

    if (user.password !== user.passwordConfirm) {
      setError(true)
      setErrorMessage("Password y Confirmación de Password no coinciden")
      return;
    }

    const data = {
      email: user.email,
      password: user.password,
    };
    authService
      .register(data)
      .then((res) => {
        if (isMounted.current) {
          setSuccess(true)
          setSuccessMessage(res.data)
          setError(false);
        }
      })
      .catch((error) => {
        if (isMounted.current) {
          setError(true);
          if (error.response.data.message) {
            setErrorMessage(error.response.data.message);
          }
          timer.current = setTimeout(() => {
            setError(false);
            setErrorMessage("");
          }, 15000);
        }
      });
  };

  return (
    <div className="centeredContainer">
      <h1>Registrar usuario</h1>

      {error && (
        <Alert variant="danger" onClose={() => setError(false)} dismissible>
          {<p>{errorMessage}</p>}
        </Alert>
      )}

    {success && (
        <Alert variant="success" onClose={() => setSuccessMessage(false)} dismissible>
          {<p>{successMessage}</p>}
          <Button onClick={handleLogin}>Ir al login </Button>
        </Alert>
      )}

      <Form onSubmit={startRegister}>
        <Col md={6} className="centeredContainer">
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              value={user.email}
              onChange={handleInput}
              name="email"
              required
            ></Form.Control>
            <Form.Label>Password</Form.Label>

            <Form.Control
              type="password"
              value={user.password}
              onChange={handleInput}
              name="password"
              required
            ></Form.Control>

            <Form.Label>Confirmar Password</Form.Label>

            <Form.Control
              type="password"
              value={user.passwordConfirm}
              onChange={handleInput}
              name="passwordConfirm"
              required
            ></Form.Control>
          </Form.Group>
        </Col>
        <Button type="submit" className="spacedButton">
          Registrarse
        </Button>
      </Form>
    </div>
  );
}

export default Register;
