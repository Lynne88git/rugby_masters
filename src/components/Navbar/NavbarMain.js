import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import {
  Nav,
  Navbar,
  Container,
  Row,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Dropdown,
  DropdownButton
} from 'react-bootstrap'
import MobileNav from '../MobileNav/MobileNav'
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs'
import Login from '../Login/Login'
import SignUp from '../Signup/Signup'
import Home from '../../pages/Home'
import BrowseClasses from '../../pages/BrowseClasses'
import BasicSkills from '../../pages/BasicSkills'
import RugbyBasics from '../../pages/RugbyBasics'
import ErrorPage from '../../pages/ErrorPage'
import './Navbar.scss'
import 'bootstrap/dist/css/bootstrap.css'

export default function NavbarMain() {
  return (
    <Router>
      <>
        <div className="d-flex justify-content-end w-100">
          <Container className="navbar-mobile custom-width px-5 pt-3">
            <MobileNav />
          </Container>
        </div>
        <Navbar expand="lg" className="navbar-main px-5">
          <Container className="navbar-desktop">
            <Navbar.Brand as={Link} to="/">
              <img className="nav-logo" src="../../assets/icons/footer_rugby_masters_logo.svg" />
            </Navbar.Brand>
            <Nav className="me-auto my-2 my-lg-0">
              <Nav.Link as={Link} to="/browseclasses">
                Browse Classes
              </Nav.Link>
            </Nav>
            <div className="d-flex justify-content-end w-100">
              <Dropdown>
                <Dropdown.Toggle className="custom-non-btn-style s-search" id="dropdown-basic">
                  <img className="pr-1" src="../../assets/icons/header-search.svg" />
                  Search
                </Dropdown.Toggle>

                <Dropdown.Menu className="dropdown-transparent">
                  <Form className="d-flex">
                    <FormControl
                      type="search"
                      placeholder="Search"
                      className="me-2"
                      aria-label="Search"
                    />
                  </Form>
                </Dropdown.Menu>
              </Dropdown>
              <Nav.Link href="#action2">
                <img className="pr-1" src="../../assets/icons/header_cart_icon.svg" />
                Cart
              </Nav.Link>
              <Dropdown>
                <Dropdown.Toggle className="custom-non-btn-style" id="dropdown-basic">
                  Log In
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Login />
                </Dropdown.Menu>
              </Dropdown>
              <Button className="button-primary">Sign Up</Button>
            </div>
          </Container>
        </Navbar>

        <div className="page-container">
          <Breadcrumbs />
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
