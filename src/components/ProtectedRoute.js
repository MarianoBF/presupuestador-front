import React from "react";
import { Redirect } from "react-router-dom";
import jwt_decode from "jwt-decode";

let token = (sessionStorage.getItem('pre_ejisao')) || ""

function ProtectedRoute(props) {

  const Component = props.component;
  const autorizado = token
    ? jwt_decode(token).exp > new Date().getTime() / 1000
    : false;

    console.log("aut", autorizado)

  return autorizado ? <Component /> : <Redirect to={{ pathname: "/login" }} />;
}

export const setRoute = (tkn) => {
  token = tkn;
};

export default ProtectedRoute;
