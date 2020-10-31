import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./Footer.css";
import ModalLink from "./ModalLink";

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
            <ModalLink
              linkLabel="Legal Information"
              className="modalLegal"
              modalTitle="Legal Information"
              modalSubtitle=" Information in accordance with Section 5 TMG"
              modalContent={
                <>
                  <small>
                    <b>
                      This is a free open source project without the intention
                      of making any profit. Yet, according to German law, there
                      is some legal information that needs to be shared.
                    </b>
                  </small>
                  <p style={{ marginTop: "10px" }}>
                    Jannis Betschki <br />
                    Landsberger Allee 171d
                    <br />
                    10369 Berlin
                  </p>
                  <p>
                    <b>Email:</b> hallo [ät] betschki.com
                  </p>
                </>
              }
            />{" "}
            |{" "}
            <ModalLink
              linkLabel="Terms & Conditions"
              className="modalTC"
              modalTitle="Terms & Conditions"
              modalSubtitle="Phew, thankfully there aren't any..."
              modalContent={
                <>
                  <p>
                    Since there isn't functionality to <b>servus</b>.social yet,
                    you do not have to worry about any small print...and neither
                    do I 😅
                  </p>
                </>
              }
            />{" "}
            |{" "}
            <ModalLink
              linkLabel="Privacy"
              className="modalPrivacy"
              modalTitle="Privacy disclaimer"
              modalSubtitle="...yeah, not much to see here"
              modalContent={
                <>
                  <p>
                    At this point in time (read: <b>servus</b>.social is still
                    in development), we do not collect any noteworthy
                    information, according to GDPR or other privacy regulations.
                  </p>
                  <p>
                    That being said, we do use{" "}
                    <a href="https://plausible.io/" target="_blank">
                      Plausible.io
                    </a>{" "}
                    for analytics purposes. Since the tool itself is designed
                    around privacy, no user information or cookies are stored.{" "}
                    <b>Way to go, isn't it!</b>
                  </p>
                  <small>
                    If you actually made it all the way to <b>servus</b>
                    .social's privacy note, go ahead and check them out.
                  </small>
                </>
              }
            />
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
