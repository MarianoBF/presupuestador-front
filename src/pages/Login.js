import { useState, useRef, useEffect } from "react";
import {useHistory} from "react-router-dom";
import "../App.css";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import authService from "../services/auth.service";
import useMounted from "../hooks/useMounted";
import jwt_decode from "jwt-decode";

function Login() {
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const timer = useRef(true);
  const isMounted = useMounted();

  const initialUserState = {
    email: "",
    password: "",
  };

  const history = useHistory();

  const [user, setUser] = useState(initialUserState);

  const handleInput = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  useEffect(() => {
    try {
      let token = JSON.parse(sessionStorage.getItem("pre_ejisao"));
      token = jwt_decode(token);
      if (token.exp > new Date().getTime() / 1000) {
        history.push("/home")
      }
    } catch {
      console.log("Debe loguearse");
    }
  }, [history]);

  const login = (e) => {
    e.preventDefault();
    const data = {
      email: user.email,
      password: user.password,
    };
    authService
      .login(data)
      .then((res) => {
        if (isMounted.current) {
          setError(false);
          sessionStorage.setItem("pre_ejisao", (res.data));
          history.push("/home")
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
      <h1>Login</h1>

      {error && (
        <Alert variant="danger" onClose={() => setError(false)} dismissible>
          {<p>{errorMessage}</p>}
        </Alert>
      )}

      <Form onSubmit={login}>
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
          </Form.Group>
        </Col>
        <Button type="submit" className="spacedButton">
          Ingresar
        </Button>
      </Form>
    </div>
  );
}

export default Login;
