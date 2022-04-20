import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import {
  Nav,
  Navbar,
  Container,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Dropdown,
  DropdownButton
} from 'react-bootstrap'
import Login from '../Login/Login'
import SignUp from '../Signup/Signup'
import Home from '../../pages/Home'
import BrowseClasses from '../../pages/BrowseClasses'
import BasicSkills from '../../pages/BasicSkills'
import RugbyBasics from '../../pages/RugbyBasics'
import ErrorPage from '../../pages/ErrorPage'
import './Navbar.scss'
//import Logo from '../../assets/icons/mobile_header_logo.png'

export default class NavbarMain extends Component {
  render() {
    return (
      <Router>
        <>
          <Navbar expand="lg" className="navbar-main px-5">
            <Container fluid>
              <Nav.Link as={Link} to="/">
                <img className="nav-logo" src="../../assets/icons/footer_rugby_masters_logo.svg" />
              </Nav.Link>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                  <Nav.Link as={Link} to="/browseclasses">
                    Browse Classes
                  </Nav.Link>
                </Nav>
                <div className="d-flex justify-content-end w-100">
                  <Form className="d-flex">
                    {/* <FormControl
                      type="search"
                      placeholder="Search"
                      className="me-2"
                      aria-label="Search"
                    /> */}
                    <Button variant="custom-non-btn-style">
                      {' '}
                      <img className="pr-1 s-search" src="../../assets/icons/header-search.svg" />
                      Search
                    </Button>
                  </Form>
                  <Nav.Link href="#action2">
                    <img className="pr-1" src="../../assets/icons/header_cart_icon.svg" />
                    Cart
                  </Nav.Link>
                  <Nav.Link href="#action2">Log In</Nav.Link>
                  <Button className="button-primary">Sign Up</Button>
                </div>
              </Navbar.Collapse>
            </Container>
          </Navbar>

          <div className="page-container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="browseclasses" element={<BrowseClasses />} />
              <Route path="basicskills" element={<BasicSkills />} />
              <Route path="rugbybasics" element={<RugbyBasics />} />
              <Route path="*" element={<ErrorPage />} />
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<SignUp />} />
            </Routes>
          </div>
        </>
      </Router>
    )
  }
}
