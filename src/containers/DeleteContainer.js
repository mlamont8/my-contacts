import React from 'react';
import {Modal, Button, Col, Row}  from 'react-bootstrap';
import Rebase from 're-base';

// Initialize Re-base for Firebase Database
const base = Rebase.createClass({
  apiKey: "AIzaSyAHbDANW8lODFkutIND_PyVVU4DVM_5Wok",
  authDomain: "my-contacts-8f8a0.firebaseapp.com",
  databaseURL: "https://my-contacts-8f8a0.firebaseio.com",
  storageBucket: "my-contacts-8f8a0.appspot.com"
});

class DeleteContainer extends React.Component {

constructor(props) {
  super(props);
  this.state = {
    loading: true
  };
  this.removeUser = this.removeUser.bind(this);
}

componentDidMount() {
// Ref ensures Firebase is in sync with state
this.ref = base.syncState('contacts', {
  context: this,
  state: 'contacts',
  asArray: true,
  then(){
    this.setState({loading:false})
  }
})

}


componentWillUnmount(){
// Remove Binding for Firebase when unmounted
base.removeBinding(this.ref);
}

  removeUser(){
      const array = this.props.contacts
      const index = this.props.index
      array.splice(index, 1);
      //updates state
      this.setState({contacts: array });
      //syncs with firebase
      base.syncState(`contacts`, {
        context: this,
        state: 'contacts',
        asArray: true,
        then(){
          this.setState({loading:false})
          this.props.deleteAlertDismiss();
        }
});
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



export default DeleteContainer;
