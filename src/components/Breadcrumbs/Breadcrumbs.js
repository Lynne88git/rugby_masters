import React from 'react'
import { Breadcrumb } from 'react-bootstrap'
import './Breadcrumbs.scss'

export default function Breadcrumbs() {
  return (
    <div className="container custom-width pl-4 pt-5">
      <Breadcrumb className="breadcrumb-container py-3">
        <Breadcrumb.Item href="/">
          <img
            className="pr-1 s-search breadcrumbs-home"
            src="../../assets/icons/class_details_home_rugby_masters_logo.svg"
          />
        </Breadcrumb.Item>
        <Breadcrumb.Item href="/browseclasses">Browse Classes</Breadcrumb.Item>
        <Breadcrumb.Item href="/basicskills">Basic Skills</Breadcrumb.Item>
        <Breadcrumb.Item active>Rugby Basics</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  )
}
