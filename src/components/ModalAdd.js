import React from 'react';
import {Modal, Button, Col}  from 'react-bootstrap';
import AddContact from './AddContact';

class ModalAdd extends React.Component {

  render() {
    return (
      <Modal
        show={this.props.deleteContact}
        onHide={this.props.closeModal}
        >
         <Modal.Header closeButton>
           <div className="modal-title-div">
           <Modal.Title>Add Contact</Modal.Title>
         </div>
          <Col md={6}>
           <p>Add New Contact Here</p>
         </Col>

         </Modal.Header>
         <Modal.Body>

           <AddContact
             closeModal={this.props.closeModal}
           />

       </Modal.Body>
         <Modal.Footer>
           <Button onClick={this.props.closeModal}>Close</Button>
         </Modal.Footer>
       </Modal>
    );
  }

}

export default ModalAdd;
