import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const ModalExample = (props) => {
  const { buttonLabel, className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="primary" onClick={toggle}>
        {buttonLabel} Comentarios
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>{props.title}</ModalHeader>
        <ModalBody>{props.body}</ModalBody>
        <ModalFooter></ModalFooter>
      </Modal>
    </div>
  );
};

export default ModalExample;
///////////// A SIMPLE MODAL FOR THE DETAILS OF THE POST //////////////////
