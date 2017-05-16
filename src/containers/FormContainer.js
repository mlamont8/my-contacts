import React from 'react';
import {Modal, Button, Row}  from 'react-bootstrap';
//import ModalUpdateForm from './ModalUpdateForm';
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

         <Row><h2>Update info for</h2></Row>
         <Row><h1>{this.props.currentContact.name}</h1></Row>

         </Modal.Header>
         <Modal.Body>

           {/* <ModalUpdateForm
             currentContact={this.props.currentContact}
             currentIndex={this.props.currentIndex}
             contacts={this.props.contacts}
             index={this.props.currentIndex}
           /> */}

           <ContactForm
             currentContact={this.props.currentContact}
             currentIndex={this.props.currentIndex}
             contacts={this.props.contacts}
             index={this.props.currentIndex}
             closeModal={this.props.closeModal}
           />

       </Modal.Body>
         <Modal.Footer>
         </Modal.Footer>
       </Modal>
    );
  }

}

export default FormContainer;
