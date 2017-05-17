import React from 'react';
import {Modal, Row, Col}  from 'react-bootstrap';
import ContactForm from '../components/ContactForm';

class FormContainer extends React.Component {

  render() {


    return (
      <Modal
        show={this.props.showModal}
        onHide={this.props.closeModal}
        >
         <Modal.Header closeButton>
           <div className="modal-title-div">
           <Modal.Title>Contact Form</Modal.Title>
         </div>
         <Col xs={6} xsOffset={4}>
         <Row><h2>{this.props.currentContact.name}</h2></Row>
       </Col>
         </Modal.Header>
         <Modal.Body>

           <ContactForm
             currentContact={this.props.currentContact}
             currentIndex={this.props.currentIndex}
             contacts={this.props.contacts}
             index={this.props.currentIndex}
             closeModal={this.props.closeModal}
             newContact={this.props.newContact}
           />

       </Modal.Body>
         <Modal.Footer>
         </Modal.Footer>
       </Modal>
    );
  }

}

export default FormContainer;
