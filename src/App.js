import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Barra from "./components/Navbar"
import AddEntry from "./pages/AddEntry";
import AddBudgetLine from "./pages/AddBudgetLine";
import ListEntries from "./pages/ListEntries";
import ListBudget from "./pages/ListBudget";
import Configuration from "./pages/Configuration";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

import { Switch, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";


function App() {
  return (
    <div className="App">
      <Barra />

      <div>
        <Switch>
          <ProtectedRoute exact path="/budget" component={ListBudget} />
          <ProtectedRoute exact path="/entries" component={ListEntries} />
          <ProtectedRoute exact path="/add" component={AddEntry} />
          <ProtectedRoute exact path="/addBudget" component={AddBudgetLine} />
          <ProtectedRoute exact path="/config" component={Configuration} />
          <ProtectedRoute exact path="/home" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route path="/" component={Login} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
