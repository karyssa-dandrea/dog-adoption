import './App.css';
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';
import Dogs from './views/Dogs/Dogs';
import Dog from './views/Dogs/Dog';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <header>
          <NavLink to="/dogs"> Home </NavLink>
        </header>
        <Switch>
          <Route exact path="/dogs" component={Dogs} />
          <Route exact path="/dogs/:id" component={Dog} />
          <Route exact path="/">
            <Dogs />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
