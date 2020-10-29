import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <Container>
        <Row>
          <Col>
            <span className="span--fontweight-bold">
              &copy; {new Date().getFullYear()} servus
            </span>
            .social
          </Col>
          <Col className="text-right">
            <a href="/#">Imprint</a> | <a href="/#">Terms</a> |{" "}
            <a href="/#">Privacy</a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
