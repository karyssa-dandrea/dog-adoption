import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dogs from './views/Dogs/Dogs';
import Dog from './views/Dogs/Dog';
import DogEdit from './views/Edit/DogEdit';
import Admin from './views/Admin/Admin';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Switch>
          <Route exact path="/dogs" component={Dogs} />
          <Route exact path="/dogs/:id" component={Dog} />
          <Route exact path="/dogs/:id/edit" component={DogEdit} />
          <Route exact path="/admin" component={Admin} />
          <Route exact path="/">
            <Dogs />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
