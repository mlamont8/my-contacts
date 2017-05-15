import React from 'react';
import {Modal, Button, Col}  from 'react-bootstrap';
import ModalForm from './ModalForm';

class ModalUpdate extends React.Component {

  render() {
    return (
      <Modal
        show={this.props.showModal}
        onHide={this.props.closeModal}
        >
         <Modal.Header closeButton>
           <div className="modal-title-div">
           <Modal.Title>{this.props.currentContact.name}</Modal.Title>
         </div>
          <Col md={6}>
           <p>this and that</p>
         </Col>
         <Col md={6}>
          <p>Map here</p>
        </Col>

         </Modal.Header>
         <Modal.Body>

           <ModalForm
             currentContact={this.props.currentContact}
             currentIndex={this.props.currentIndex}
           />
       </Modal.Body>
         <Modal.Footer>
           <Button onClick={this.props.closeModal}>Close</Button>
         </Modal.Footer>
       </Modal>
    );
  }

}

export default ModalUpdate;
