import { useState, useEffect } from 'react'
import { Navbar, Container, Row, Col, Nav, Offcanvas, Button } from 'react-bootstrap'
import './MobileNav.scss'

const options = [
  {
    name: 'End',
    scroll: false,
    placement: 'end'
  }
]

function MobileNav({ name, ...props }) {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="me-2 custom-non-btn-style">
        <img className="nav-logo" src="../../assets/icons/mobile-hamburger-menu.svg" />
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="p-5">
            <img className="nav-logo" src="../../assets/icons/mobile_nav_logo.svg" />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Container className="text-center">
            <Row>
              <Col>
                <Nav.Link className="mobile-nav-link py-2" href="/browseclasses">
                  Browse Classes
                </Nav.Link>
              </Col>
            </Row>
            <Row>
              <Col>
                <Nav.Link className="mobile-nav-link py-2" href="#action2">
                  <img className="pr-1" src="../../assets/icons/mobile_nav_cart_icon.svg" />
                  Cart
                </Nav.Link>
              </Col>
            </Row>
            <Row>
              <Col>
                <Nav.Link className="mobile-nav-link py-2" href="#action2">
                  Log In
                </Nav.Link>
              </Col>
            </Row>
            <Row>
              <Col>
                <Button className="button-primary my-2">Sign Up</Button>
              </Col>
            </Row>
          </Container>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default function MobileNavRender() {
  return (
    <>
      {options.map((props, idx) => (
        <MobileNav key={idx} {...props} />
      ))}
    </>
  )
}
