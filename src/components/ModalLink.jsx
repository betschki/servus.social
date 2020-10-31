import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

function ModalLink(props) {
  const {
    linkLabel,
    className,
    modalTitle,
    modalSubtitle,
    modalContent,
  } = props;
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <>
      <a href="/#modal" onClick={toggle} className={className}>
        {linkLabel}
      </a>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>{modalTitle}</ModalHeader>
        <ModalBody>
          <span
            style={{
              fontWeight: "bold",
              marginBottom: "10px",
              display: "block",
            }}
          >
            {modalSubtitle}
          </span>
          {modalContent}
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={toggle}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default ModalLink;
