import React, { useRef, useState } from 'react'
import { Accordion, Card, Button, OverlayTrigger, Popover } from 'react-bootstrap'
import './Home.scss'
import HomeVideo from '../components/HomeVideo/HomeVideo'
import CTABanner from '../components/CTABanner/CTABanner'
import PurchaseLessons from '../components/PurchaseLessons/PurchaseLessons'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Home() {
  const popoverHoverFocus = (
    <Popover
      id="popover-trigger-hover-focus"
      title="Popover bottom"
      className="p-2 text-center font-weight-bolder">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
    </Popover>
  )
  return (
    <>
      <div className="py-5">
        <div className="container custom-width">
          <p className="text-white">Breadcrumbs</p>
          <div className="row">
            <div className="d-flex justify-content-between py-3 lesson-info-blurb mb-4">
              <div className="col-2">
                <img
                  className="info-blurb-img"
                  src="../../assets/images/class_overview_circle_image@1x.png"
                />
              </div>
              <div className="col-7 p-0">
                <div className="mr-auto p-2">
                  <div className="row">
                    <div className="text-white mx-0 my-2">
                      <h2>Rugby Basics</h2>
                      <h4 className="h4or5">Taught by Cobus Reinach</h4>
                      <p className="lesson-details">6 Lessons - 3 Hours, 27 Mins</p>
                      <Button className="button-white">2 Snapshots Available</Button>
                      <OverlayTrigger
                        trigger={['hover', 'focus']}
                        placement="right"
                        overlay={popoverHoverFocus}>
                        <Button className="custom-non-btn-style">
                          <img
                            className="px-2 button"
                            src="../../assets/icons/class_details_i_icon-ic_info.svg"
                          />
                        </Button>
                      </OverlayTrigger>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-3 p-0 ml-4">
                <div className="row">
                  <h4 className="h4or5 text-white pr-4 pt-2">R1550.00</h4>
                  <Button className="button-primary">Add to Cart</Button>
                </div>
                <div className="row mt-5">
                  <Button className="button-frame mt-4 mr-2">Basic Skills</Button>
                  <Button className="button-frame mt-4 mr-2">Coaching</Button>
                  <Button className="button-frame mt-4 mr-2">Techinques</Button>
                </div>
              </div>
            </div>
          </div>
          {/* Video */}
          <div className="row">
            <div className="col-8 p-0">
              <Card className="card-color">
                <HomeVideo />
                <Card.Body>
                  <Card.Text className="p-3">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut eum similique
                    repellat a laborum, rerum voluptates ipsam eos quo tempore iusto dolore modi
                    dolorum in pariatur. Incidunt repellendus praesentium quae! Ut eum similique
                    repellat a laborum, rerum voluptates ipsam eos quo tempore iusto dolore modi
                    dolorum in pariatur. Ut eum similique repellat a laborum.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>

            {/* Accordian */}
            <div className="col-4 p-0">
              <div className="ml-3">
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header className="info-heading">
                      <h6 className="ml-4">1. Introduction</h6>
                    </Accordion.Header>
                    <Accordion.Body className="px-5 mb-3">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header className="info-heading">
                      <h6 className="ml-4">2. On-Field Decision Making</h6>
                    </Accordion.Header>
                    <Accordion.Body className="px-5 mb-3">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header className="info-heading">
                      <h6 className="ml-4 text-left">3. Passing</h6>
                    </Accordion.Header>
                    <div className="container mb-4">
                      <a className="button-secondary py-2 px-5 ml-4 mb-3" href="#">
                        Available as Snapshot
                      </a>
                    </div>
                    <Accordion.Body className="px-5 mb-3">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header className="info-heading">
                      <h6 className="ml-4 text-left">4. Kicking</h6>
                    </Accordion.Header>
                    <Accordion.Body className="px-5 mb-3">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="4">
                    <Accordion.Header className="info-heading">
                      <h6 className="ml-4 text-left">5. Game Prep and Analysation</h6>
                    </Accordion.Header>
                    <div className="container mb-4">
                      <a className="button-secondary py-2 px-5 ml-4 mb-3" href="#">
                        Available as Snapshot
                      </a>
                    </div>
                    <Accordion.Body className="px-5 mb-3">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="5">
                    <Accordion.Header className="info-heading">
                      <h6 className="ml-4 text-left">6. Tricks</h6>
                    </Accordion.Header>
                    <Accordion.Body className="px-5 mb-3">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>
            <div className="row align-items-center coach-blurb w-100 mt-5 py-3 ml-0">
              <div className="col-1">
                <img
                  className="px-2 coach-blurb-img"
                  src="../../assets/icons/cobus_coach_image.png"
                />
              </div>
              <div className="col coach-blurb-desc">
                <h3>Cobus Reinach</h3>
                <p className="title">Professional Rugny Union Player</p>
              </div>
              <div className="col">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut eum similique
                  repellat a laborum, rerum voluptates ipsam eos quo tempore iusto dolore modi
                  dolorum in pariatur. Incidunt repellendus praesentium quae! Ut eum similique
                  repellat a laborum, rerum
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CTABanner />
      <div className="py-5">
        <div className="container custom-width text-white">
          <div className="row">
            <PurchaseLessons />
          </div>
        </div>
      </div>
    </>
  )
}
