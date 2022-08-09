import { useState, useRef } from "react";
import "../App.css";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import authService from "../services/auth.service";
import useMounted from "../hooks/useMounted";
// import Spinner from "react-bootstrap/Spinner";

function Login() {
  // const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const timer = useRef(true);
  const isMounted = useMounted();
  // const [errorMessage, setErrorMessage] = useState("");

  // if (loading) {
  //   return (
  //     <div className="loading">
  //       <Spinner animation="grow" variant="success" />
  //     </div>
  //   );
  // }

  const initialUserState = {
    email: "",
    password: "",
  };

  const [user, setUser] = useState(initialUserState);

  const handleInput = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const login = (e) => {
    e.preventDefault();
    const data = {
      email: user.email,
      password: user.password,
    };
    authService
      .login(data)
      .then(() => {
        if (isMounted.current) {
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
      <h1>Login</h1>

      {error && (
        <Alert variant="danger" onClose={() => setError(false)} dismissible>
          {<p>{errorMessage}</p>}
        </Alert>
      )}

      <Form onSubmit={login}>
        <Col md={6} className="centeredContainer">
          <Form.Group>
            <Form.Label>
              Email
              <Form.Control
                type="email"
                value={user.email}
                onChange={handleInput}
                name="email"
                required
              ></Form.Control>
            </Form.Label>
            <Form.Label>
              Password
              <Form.Control
                type="password"
                value={user.password}
                onChange={handleInput}
                name="password"
                required
              ></Form.Control>
            </Form.Label>
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
