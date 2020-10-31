import React from "react";
import { Container, Row, Col } from "reactstrap";
import ReportImg from "../img/report.svg";
import "./Report.css";

function Report() {
  return (
    <section className="report">
      <Container>
        <Row>
          <Col>
            <img
              src={ReportImg}
              className="rounded mx-auto d-block"
              alt="illustration of people looking at documents"
            />
          </Col>
          <Col>
            <h2>Your report includes...</h2>
            <ul>
              <li>your most engaging follower</li>
              <li>who liked your posts the most</li>
              <li>who commented the most</li>
              <li>...and soon even more! </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Report;
