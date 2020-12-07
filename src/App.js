import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
          <Route exact path="/" component={global} />
          <Route path="/indonesia" component={indo} />
          <Route path="/provinsi" component={prov} />
        </Switch>
    </div>
  );
}

export default App;
