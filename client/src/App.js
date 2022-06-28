import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PetForm from './components/Form/PetForm';
import PetList from './components/DashBoard/PetList';
import Update from './components/UpdateOne/Update';
import Detail from './components/ShowOne/Detail';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>

          <Route exact path="/">
            <PetList />
          </Route>

          <Route exact path="/pets/new">
            <PetForm />
          </Route>


          <Route path="/pet/update/:_id">
            <Update />
          </Route>

          <Route exact path="/pet/:_id">
            <Detail />
          </Route>


        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
