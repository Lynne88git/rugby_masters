import React from 'react'
import { Card, Button } from 'react-bootstrap'
import './PurchaseLessons.scss'

export default function PurchaseLessons() {
  return (
    <>
      <div className="row">
        <div className="container">
          <h3>Snapshots</h3>
          <p>Purchase individual lessons from this Master Class</p>
        </div>

        <div className="d-flex justify-content-start">
          <Card className="mr-3 custom-card-styles" style={{ width: '18rem' }}>
            <Card.Img variant="top" src="../../assets/images/home_snapshots_image.png" />
            <Card.Body className="snapshot-card">
              <Card.Title className="snapshot-card-title">Card Title</Card.Title>
              <Card.Text className="snapshot-card-desc">
                Some quick example text to build on the card title and make up the bulk of the
                card's content.
              </Card.Text>
              <Button className="custom-non-btn-style">
                <img src="../../assets/icons/home_cart_icon_circle.svg" />
              </Button>
            </Card.Body>
          </Card>

          <Card className="mr-3 custom-card-styles" style={{ width: '18rem' }}>
            <Card.Img variant="top" src="../../assets/images/home_snapshots_image.png" />
            <Card.Body className="snapshot-card">
              <Card.Title className="snapshot-card-title">Card Title</Card.Title>
              <Card.Text className="snapshot-card-desc">
                Some quick example text to build on the card title and make up the bulk of the
                card's content.
              </Card.Text>
              <Button className="custom-non-btn-style">
                <img src="../../assets/icons/home_cart_icon_circle.svg" />
              </Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  )
}
