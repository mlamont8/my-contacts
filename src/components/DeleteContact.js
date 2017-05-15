import React from 'react';
import {Modal, Button, Col, Row}  from 'react-bootstrap';
import Rebase  from 're-base'


// Initialize Re-base for Firebase Database
const base = Rebase.createClass({
  apiKey: "AIzaSyAHbDANW8lODFkutIND_PyVVU4DVM_5Wok",
  authDomain: "my-contacts-8f8a0.firebaseapp.com",
  databaseURL: "https://my-contacts-8f8a0.firebaseio.com",
  storageBucket: "my-contacts-8f8a0.appspot.com"
});

class deleteContact extends React.Component {

constructor(props) {
  super(props);

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
    // let key = this.props.currentContact.key
    // base.child('contacts').child(key).remove().then(() => {
    //   console.log('Contact Deleted')
    //   }).catch(error => {
    //   //handle error
    //   console.log('error',error)
    //   });
      const array = this.props.contacts
      const index = this.props.index
      array.splice(index, 1);
      this.setState({contacts: array });

  }
  render() {

    return (
      <Modal
        show={this.props.deleteContact}
        onHide={this.props.deleteAlertDismiss}
        >
          <Modal.Header closeButton>
            <div className="modal-title-div">
            <Modal.Title>Delete Contact</Modal.Title>
          </div>
           <Col xs={7} xsOffset={4}>
          <Row> <h2> {this.props.currentContact.name}</h2></Row>
          <Row>   {this.props.currentContact.phone}</Row>
          <Row>   {this.props.currentContact.email}</Row>
          <Row>   {this.props.currentContact.key}</Row>
          <Row>   {this.props.index}</Row>
          </Col>

          </Modal.Header>
      <Modal.Body>
        Are you sure you wish to delete {this.props.currentContact.name} from your list?
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={this.props.deleteAlertDismiss}>Never Mind</Button>
        <Button bsStyle="danger" onClick={this.removeUser}>Yes</Button>
      </Modal.Footer>


  </Modal>

  )

}

}



export default deleteContact;
