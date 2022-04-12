import React, { Component } from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { Nav, Dropdown, DropdownButton } from 'react-bootstrap'
import Login from '../Login/Login'
import SignUp from '../Signup/Signup'
import Home from '../../pages/Home'
import BrowseClasses from '../../pages/BrowseClasses'
import BasicSkills from '../../pages/BasicSkills'
import RugbyBasics from '../../pages/RugbyBasics'

export default class NavbarMain extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <>
            <>
              <Nav defaultActiveKey="/home" as="ul">
                <Nav.Item as="li">
                  <Nav.Link as={Link} to="/">
                    Home
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                  <Nav.Link as={Link} to="/">
                    Browse Classes
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                  <Nav.Link as={Link} to="/">
                    Basic Skills
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                  <Nav.Link as={Link} to="/">
                    Rugby Basics
                  </Nav.Link>
                </Nav.Item>

                <DropdownButton id="dropdown-basic-button" title="Dropdown button">
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </DropdownButton>
              </Nav>
            </>
            <div>
              <Routes>
                {/* <Route path="/" element={<Home />} /> */}
                <Route path="classes" element={<BrowseClasses />}>
                  <Route path="basicskills" element={<BasicSkills />} />
                  <Route path="rugbybasics" element={<RugbyBasics />} />
                  <Route path="login" element={<Login />} />
                  <Route path="signup" element={<SignUp />} />
                </Route>
              </Routes>
            </div>
          </>
        </BrowserRouter>
      </div>
    )
  }
}
