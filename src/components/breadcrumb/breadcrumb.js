import React from "react";
import { Breadcrumb } from "react-bootstrap";
// import { LinkContainer } from "react-router-bootstrap";

export const BreadCrumb = ({ page }) => {
  return (
    <Breadcrumb >
      {/* <LinkContainer to="/">
      </LinkContainer> */}
      <Breadcrumb.Item href="/" style={{"textDecoration":"none"}}>Home</Breadcrumb.Item>
      <Breadcrumb.Item active >{page}</Breadcrumb.Item>
    </Breadcrumb>
  );
};
