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


function App() {
  return (
    <div className="App">
      <Barra />

      <div>
        <Switch>
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/budget" component={ListBudget} />
          <Route exact path="/entries" component={ListEntries} />
          <Route exact path="/add" component={AddEntry} />
          <Route exact path="/addBudget" component={AddBudgetLine} />
          <Route exact path="/config" component={Configuration} />
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
