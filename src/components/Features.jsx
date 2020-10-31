import React from "react";
import "./Features.css";
import { Container, Row, Col } from "reactstrap";
import Wave from "../img/wave.svg";
import WaveBottom from "../img/wave-bottom.svg";
import FeaturesAnalyseImg from "../img/features-analyseweekly.svg";
import FeaturesFreeImg from "../img/features-free.svg";

function Features() {
  return (
    <section className="features">
      <div className="wave wave--container-top">
        <img src={Wave} alt="wave background top" />
      </div>
      <Container>
        <Row className="features-1">
          <Col>
            <img
              src={FeaturesAnalyseImg}
              className="rounded mx-auto d-block"
              alt="person looking at notifications on phone"
            />
          </Col>
          <Col>
            <h2>
              servus<span className="span--fontweight-light">.social</span>{" "}
              analyses your posts on a weekly basis
            </h2>
            <p>
              Every week you will receive a personalised direct message on
              Instagram that includes your top followers.
            </p>
          </Col>
        </Row>
        <Row className="features-2">
          <Col>
            <h2>Yes, it’s absolutely free for you!</h2>
            <p>
              servus.social is free. So, how does it make money? It doesn’t. And
              for now, it will stay like that.
            </p>
          </Col>
          <Col>
            <img
              src={FeaturesFreeImg}
              className="rounded mx-auto d-block"
              alt="a printer printing a document with the word free"
            />
          </Col>
        </Row>
      </Container>
      <div className="wave wave--container-bottom">
        <img src={WaveBottom} alt="wave background bottom" />
      </div>
    </section>
  );
}

export default Features;
