import React from 'react'
import { Breadcrumb } from 'react-bootstrap'

export default function Breadcrumbs() {
  return (
    <div>
      <Breadcrumb>
        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Browse Classes</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Basic Skills</Breadcrumb.Item>
        <Breadcrumb.Item active>Rugby Basics</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  )
}
