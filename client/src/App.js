import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PetForm from './components/Form/PetForm';
import DashBoardNav from './components/DashBoard/DashBoard&Nav';
import Update from './components/UpdateOne/Update';
import Detail from './components/ShowOne/Detail';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>

          <Route exact path="/">
            <DashBoardNav />
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
