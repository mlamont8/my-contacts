import React from 'react';
import {Modal, Button, Col, Row}  from 'react-bootstrap';


class deleteContact extends React.Component {

constructor(props) {
  super(props);

  this.removeUser = this.removeUser.bind(this);

}

  removeUser(){
      const array = this.props.contacts
      const index = this.props.index
      array.splice(index, 1);
      this.setState({contacts: array });
      this.props.deleteAlertDismiss = true;

  }
  render() {

    return (
      <Modal
        show={this.props.deleteContact}
        onHide={this.props.deleteAlertDismiss}
        >
          <Modal.Header closeButton>
            <div className="modal-title-div">
            <Modal.Title>Remove Contact</Modal.Title>
          </div>
        <Col xs={6} xsOffset={5}>
          <Row> <h3> {this.props.currentContact.name}</h3></Row>
          <Row>   <p>{this.props.currentContact.phone}</p></Row>
          <Row>   <p>{this.props.currentContact.email}</p></Row>
        </Col>

          </Modal.Header>
      <Modal.Body>
        Are you sure you wish to delete {this.props.currentContact.name} from your list?
      </Modal.Body>

      <Modal.Footer>
        <Button bsStyle="primary" onClick={this.props.deleteAlertDismiss}>Never Mind</Button>
        <Button bsStyle="danger" onClick={this.removeUser}>Yes</Button>
      </Modal.Footer>


  </Modal>

  )

}

}



export default deleteContact;
