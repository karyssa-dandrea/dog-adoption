import './App.css';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <header>
          <NavLink to="/dogs"> Adopt Us! </NavLink>
        </header>
        <Switch>
          <Route exact path="/dogs" component={Dogs} />
          <Route exact path="/dogs/:id" component={Dog} />
          <Route exact path="/">
            <h1>Adoption Available!</h1>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
