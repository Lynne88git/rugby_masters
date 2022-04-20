import React from 'react'
import { Button } from 'react-bootstrap'
import './CTABanner.scss'

export default function CTABanner() {
  return (
    <div>
      <div className="cta-banner-container mt-5 py-5 px-5">
        <div className="w-100">
          <div className="container align-items-center">
            <div className="w-100">
              <div className="container align-items-center">
                <div className="row">
                  <div className="col py-5">
                    <h1 className="display-2">Ready to go?</h1>
                    <h3 className="lead">Purchase this class in just a few clicks</h3>
                  </div>
                  <div className="col action py-5">
                    <Button className="button-primary button-action my-4">Add to Cart</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
