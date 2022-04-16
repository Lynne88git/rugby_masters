import React from 'react'
import { Accordion, Card } from 'react-bootstrap'
import './Home.scss'
import HomeVideo from '../components/HomeVideo/HomeVideo'

export default function Home() {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-7">
          <div className="card card-color">
            <HomeVideo />
            <div className="card-body">
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut eum similique repellat
                a laborum, rerum voluptates ipsam eos quo tempore iusto dolore modi dolorum in
                pariatur. Incidunt repellendus praesentium quae!
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <Accordion defaultActiveKey="0">
            <Card>
              <Accordion.Item eventKey="0">
                <Accordion.Header className="info-heading px-5">1. Introduction</Accordion.Header>
                <Accordion.Body className="px-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
            </Card>
            <Card>
              <Accordion.Item eventKey="1">
                <Accordion.Header className="info-heading py-2 px-5">
                  2. On-Field Decision Making
                </Accordion.Header>
                <Accordion.Body className="px-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
            </Card>
            <Card>
              <Accordion.Item eventKey="2">
                <Accordion.Header className="info-heading py-2 px-5">3. Passing</Accordion.Header>
                <Accordion.Body className="px-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
            </Card>
          </Accordion>
        </div>
      </div>
    </div>
  )
}
