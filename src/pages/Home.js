import React from 'react'
import { Accordion, Card, Button } from 'react-bootstrap'
import './Home.scss'
import HomeVideo from '../components/HomeVideo/HomeVideo'
import CTABanner from '../components/CTABanner/CTABanner'
import PurchaseLessons from '../components/PurchaseLessons/PurchaseLessons'

export default function Home() {
  return (
    <>
      <div className="row d-flex justify-content-center">
        <div className="py-5">
          <div className="row custom-width">
            <div className="d-flex py-3 lesson-info-blurb mb-4">
              <div className="mr-auto p-2">
                <div className="row">
                  <img
                    className="info-blurb-img"
                    src="../../assets/images/class_overview_circle_image@1x.png"
                  />
                  <div className="text-white mx-5 my-2">
                    <h2>Rugby Basics</h2>
                    <h4 className="h4or5">Taught by Cobus Reinach</h4>
                    <p className="lesson-details">6 Lessons - 3 Hours, 27 Mins</p>
                    <Button className="button-white">2 Snapshots Available</Button>
                    <img
                      className="px-2"
                      src="../../assets/icons/class_details_i_icon-ic_info.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="pt-3 pr-3">
                <div className="row">
                  <h4 className="h4or5 text-white pr-4 pt-2">R1550.00</h4>
                  <Button className="button-primary">Add to Cart</Button>
                </div>
                <div className="row mt-5 pt-3">
                  <Button className="button-frame mt-4 mr-2">Basic Skills</Button>
                  <Button className="button-frame mt-4 mr-2">Coaching</Button>
                  <Button className="button-frame mt-4 mr-2">Techinques</Button>
                </div>
              </div>
            </div>
            <div className="col-8">
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
            <div className="col">
              <Accordion defaultActiveKey="0">
                <Card>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header className="info-heading px-5 py-2">
                      1. Introduction
                      <img
                        className="px-2 toggle-arrow"
                        src="../../assets/icons/class_details_arrow_up.svg"
                      />
                    </Accordion.Header>
                    <Accordion.Body className="px-5 py-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua.
                    </Accordion.Body>
                  </Accordion.Item>
                </Card>
                <Card>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header className="info-heading py-2 px-5">
                      2. On-Field Decision Making
                    </Accordion.Header>
                    <Accordion.Body className="px-5 py-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua.
                    </Accordion.Body>
                  </Accordion.Item>
                </Card>
                <Card>
                  <Accordion.Item eventKey="2" className="mb-4">
                    <Accordion.Header className="info-heading pt-2 px-5">
                      3. Passing{' '}
                    </Accordion.Header>

                    <Button className="button-secondary py-2 px-5 ml-5">
                      Available as Snapshot
                    </Button>

                    <Accordion.Body className="px-5 py-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua.
                    </Accordion.Body>
                  </Accordion.Item>
                </Card>
                <Card>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header className="info-heading py-2 px-5">
                      4. Kicking
                    </Accordion.Header>
                    <Accordion.Body className="px-5 py-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua.
                    </Accordion.Body>
                  </Accordion.Item>
                </Card>
                <Card>
                  <Accordion.Item eventKey="4" className="mb-4">
                    <Accordion.Header className="info-heading pt-2 px-5">
                      5. Game Prep and Analysation
                    </Accordion.Header>
                    <Button className="button-secondary py-2 px-5 ml-5">
                      Available as Snapshot
                    </Button>
                    <Accordion.Body className="px-5 py-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua.
                    </Accordion.Body>
                  </Accordion.Item>
                </Card>
                <Card>
                  <Accordion.Item eventKey="5">
                    <Accordion.Header className="info-heading py-2 px-5">
                      6. Tricks
                    </Accordion.Header>
                    <Accordion.Body className="px-5 py-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua.
                    </Accordion.Body>
                  </Accordion.Item>
                </Card>
              </Accordion>
            </div>
            <div className="row align-items-center text-white coach-blurb w-100 mt-5 py-3 mx-2">
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
        <div className="row w-100 custom-width-full">
          <CTABanner />
        </div>
        <div className="py-5">
          <div className="row custom-width text-white">
            <PurchaseLessons />
          </div>
        </div>
      </div>
    </>
  )
}
