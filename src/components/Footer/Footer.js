import React from 'react'
import './Footer.scss'

export default function Footer() {
  return (
    <>
      <div className="mt-5 pt-5 pb-5 footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-2 col-xs-12 about-company">
              <img className="" src="../../assets/icons/footer_rugby_masters_logo.svg" />
            </div>
            <div className="col-lg-6 col-xs-12 links">
              <ul className="m-0 pt-4">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Browse Classes</a>
                </li>
                <li>
                  <a href="#">Create an Account</a>
                </li>
                <li>
                  <a href="#">Terms & Conditions</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 col-xs-12 location">
              <h6 className="mt-lg-0 mt-sm-4">Get in Touch</h6>
              <p className="py-3">
                <a href="#">
                  <img className="pr-2" src="../../assets/icons/footer_facebook_icon.svg" />
                </a>
                <a href="#">
                  <img className="pr-2" src="../../assets/icons/footer_instagram_icon.svg" />
                </a>
                <a href="#">
                  <img className="pr-2" src="../../assets/icons/footer_twitter_icon.svg" />
                </a>
              </p>
              <p>hello@rugbymasters.co.za</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col copyright">
          <p className="copyright-text mt-2">
            Copyright Rugby Masters {new Date().getFullYear()}, All Rights Reserved.
          </p>
        </div>
      </div>
    </>
  )
}
