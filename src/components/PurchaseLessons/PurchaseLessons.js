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
              <Card.Title className="snapshot-card-title">
                Tackling and Game Tactics Lorem ipsum dolor Game Tactics Lorem ipsum dolor with
                Cobus Reinach
              </Card.Title>
              <Card.Text className="snapshot-card-desc">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut eum similique repellat
                a laborum. Lorem ipsum dolor sit amet.
              </Card.Text>
              <div className="text-right">
                R450.00
                <Button className="custom-non-btn-style">
                  <img src="../../assets/icons/home_cart_icon_circle.svg" />
                </Button>
              </div>
            </Card.Body>
          </Card>

          <Card className="mr-3 custom-card-styles" style={{ width: '18rem' }}>
            <Card.Img variant="top" src="../../assets/images/home_snapshots_image.png" />
            <Card.Body className="snapshot-card">
              <Card.Title className="snapshot-card-title">
                Tackling and Game Tactics Lorem ipsum dolor Game Tactics Lorem ipsum dolor with
                Cobus Reinach
              </Card.Title>
              <Card.Text className="snapshot-card-desc">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut eum similique repellat
                a laborum. Lorem ipsum dolor sit amet.
              </Card.Text>
              <div className="text-right">
                R450.00
                <Button className="custom-non-btn-style">
                  <img src="../../assets/icons/home_cart_icon_circle.svg" />
                </Button>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  )
}
