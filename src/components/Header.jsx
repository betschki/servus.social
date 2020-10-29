import React from "react";
import "./Header.css";
import { Row, Col, Button } from "reactstrap";

function Header() {
  return (
    <>
      <Row className="header">
        <Col>
          <h1>
            Your{" "}
            <span class="underline underline--color-yellow">top followers</span>{" "}
            -- straight to your DMs.
          </h1>
          <p>
            <b>servus</b>.social lets you discover your top followers on
            Instagram - connect your account and get started!{" "}
          </p>
          <Button color="primary">Connect your Instagram account!</Button>
        </Col>
        <Col>
          <img
            src="/assets/images/header-illustration.svg"
            alt="illustration of two people looking at a phone"
            className="rounded mx-auto d-block"
          />
        </Col>
      </Row>
    </>
  );
}

export default Header;
