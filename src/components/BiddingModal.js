import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "../App.css";

export default function BiddingModal(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button onClick={handleShow}>Bid Details</Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Bid Details</Modal.Title>
        </Modal.Header>
        <div className="first-para">
          <p data-testid="available-quantity">
            Available Quantity : {props.coin.bidQty}
          </p>
          <p>Bid Price : {props.coin.bidPrice}</p>
        </div>
      </Modal>
    </>
  );
}
