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
        <nav><Navbar bg="info" expand="lg">
          <Navbar.Brand href="#home"><b>COVID TRACKER</b></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Global</Nav.Link>
              <Nav.Link href="/indonesia">Indonesia</Nav.Link>
              <Nav.Link href="/provinsi">Provinsi</Nav.Link>  
            </Nav>
          </Navbar.Collapse>
        </Navbar>
          
            
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
