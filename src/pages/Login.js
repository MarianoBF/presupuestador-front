import { useState } from "react";
import "../App.css";
import Alert from "react-bootstrap/Alert";
// import Spinner from "react-bootstrap/Spinner";

function Login() {

  // const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  // const [errorMessage, setErrorMessage] = useState("");

  // if (loading) {
  //   return (
  //     <div className="loading">
  //       <Spinner animation="grow" variant="success" />
  //     </div>
  //   );
  // }

  return (
    <div className="centeredContainer">
      <h1>Login</h1>

      {error && (
        <Alert variant="danger" onClose={() => setError(false)} dismissible>
          {/* <p>{errorMessage}</p> */}
        </Alert>
      )}

    </div>
  );
}

export default Login;
