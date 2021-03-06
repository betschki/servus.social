import React from "react";
import "./Header.css";
import { Row, Col } from "reactstrap";
import ModalButton from "./ModalButton";
import HeaderImg from "../images/header-illustration.svg";

function Header() {
  return (
    <>
      <Row className="header">
        <Col>
          <h1>
            Your{" "}
            <span className="underline underline--color-yellow">
              top followers
            </span>{" "}
            - straight to your DMs.
          </h1>
          <p>
            <b>servus</b>.social lets you discover your top followers on
            Instagram - connect your account and get started!{" "}
          </p>
          <ModalButton
            buttonLabel="Connect your Instagram account!"
            className="modalNotReady"
            modalTitle="Whoopsie, we're not quite ready yet..."
            modalSubtitle="Hi! It's Jannis here 👋"
            modalContent={
              <>
                <p>
                  I am building servus.social right now, as a coding exercise in
                  Javascript and ReactJS. You can{" "}
                  <a
                    href="https://twitter.com/jannisbetschki"
                    target="_blank"
                    rel="noreferrer"
                  >
                    follow the process on Twitter
                  </a>
                  , so you will be the first to know about future updates!
                </p>
                <p>
                  Also, the project is{" "}
                  <a
                    href="https://github.com/betschki/servus.social"
                    target="_blank"
                    rel="noreferrer"
                  >
                    open source
                  </a>
                  . I appreciate any feedback you might have 😊
                </p>
              </>
            }
          />
        </Col>
        <Col className="mt-5 mb-3 mt-sm-0 mb-sm-3">
          <img
            src={HeaderImg}
            alt="illustration of two people looking at a phone"
            className="rounded mx-auto d-block"
          />
        </Col>
      </Row>
    </>
  );
}

export default Header;
