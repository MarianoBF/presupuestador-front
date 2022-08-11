import React from "react";
import jwt_decode from "jwt-decode";
import { Redirect } from "react-router-dom";

function ProtectedRoute(props) {

  let token = sessionStorage.getItem("pre_ejisao") || "";

  const Component = props.component;
  const autorizado = token
    ? jwt_decode(token).exp > new Date().getTime() / 1000
    : false;

  return autorizado ? <Component /> : <Redirect to={{ pathname: "/login" }}/>;
}

export default ProtectedRoute;
