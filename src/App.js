import { BrowserRouter, Switch, Link, Route } from 'react-router-dom'
import './App.css';
import global from "./components/global";
import indo from "./components/indo";
import provinsi from "./components/provinsi";
import {Navbar,  NavDropdown, Form, Nav, FormControl, Button} from 'react-bootstrap';

const App = () => {
  return (
    <BrowserRouter>
      <div >
        <nav><Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">Covid Tracker</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Global</Nav.Link>
              <Nav.Link href="#link">Indonesia</Nav.Link>
              <Nav.Link href="#ling">Provinsi</Nav.Link>
              
            </Nav>
          </Navbar.Collapse>
        </Navbar>
          <ul>
            <li>
              <Link to='/'>Global</Link>
            </li>
            <li>
              <Link to='/indonesia'>Indonesia</Link>
            </li>
            <li>
              <Link to='/provinsi'>Provinsi</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path='/' component={global} />
          <Route path='/indonesia' component={indo} />
          <Route path='/provinsi' component={provinsi} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
