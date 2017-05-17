import React from 'react';
import {Form, FormGroup, ControlLabel, FormControl, Row, Tooltip, OverlayTrigger } from 'react-bootstrap';
import Rebase  from 're-base'
import FontAwesome from 'react-fontawesome';


// Initialize Re-base for Firebase Database
const base = Rebase.createClass({
  apiKey: "AIzaSyAHbDANW8lODFkutIND_PyVVU4DVM_5Wok",
  authDomain: "my-contacts-8f8a0.firebaseapp.com",
  databaseURL: "https://my-contacts-8f8a0.firebaseio.com",
  storageBucket: "my-contacts-8f8a0.appspot.com"
});

// Tooltip Comments
const submit = (
  <Tooltip id="submitForm"><strong>Submit</strong></Tooltip>
);
const cancel = (
  <Tooltip id="cancelForm"><strong>Cancel</strong></Tooltip>
);

class ContactForm extends React.Component {

constructor(props) {
  super(props);
  this.state = {
    contacts: [],
    newContactState: [],
    name: this.props.currentContact.name,
    email: this.props.currentContact.email,
    phone: this.props.currentContact.phone,
    address: this.props.currentContact.address,
    city: this.props.currentContact.city,
    usstate: this.props.currentContact.usstate,
    zip: this.props.currentContact.zip

  };
  // make sure the "this" variable keeps its scope
  this.changeValue = this.changeValue.bind(this);
  this.addData = this.addData.bind(this);
  this.updateState = this.updateState.bind(this);

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


changeValue(e) {
  const name = e.target.name;
  const value = e.target.value;
  console.log(e.target.name)
  this.setState({
    [name]: value
  })
}

updateState(){
  //Remove from state and update firebase
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
    }
});
}

addData(e){
  e.preventDefault();
  if(!this.state.newContact){
    this.updateState();
  }
let newContact = {
  name: this.state.name,
  email: this.state.email,
  phone: this.state.phone,
  address: this.state.address,
  city: this.state.city,
  usstate: this.state.usstate,
  zip: this.state.zip
}

this.setState({
  name: '',
  email: '',
  phone: '',
  address: '',
  city: '',
  usstate: '',
  zip: ''
})
// push to firebase
 base.push('contacts', {
data: {
    name: newContact.name,
    email: newContact.email,
    phone: newContact.phone,
    address: newContact.address,
    city: newContact.city,
    usstate: newContact.usstate,
    zip: newContact.zip
},
then(err){
if(!err){

  console.log('Successfully Added');
}
}
});

}

  render() {
    return (
      <div>
      <Form onSubmit={this.addData}>
  <FormGroup controlId="Full Name">
    <ControlLabel>Full Name</ControlLabel>
    <FormControl
      type="text"
      placeholder="Full Name"
      name="name"
      value={this.state.name}
      onChange={this.changeValue}
    />
  </FormGroup>

  <FormGroup controlId="Email Address">
    <ControlLabel>Email Address</ControlLabel>
    <FormControl
      type="text"
      placeholder="Email Address"
      name="email"
      value={this.state.email}
      onChange={this.changeValue}
    />
  </FormGroup>
  <FormGroup controlId="Phone Number">
    <ControlLabel>Phone Number</ControlLabel>
    <FormControl
      type="text"
      placeholder="Phone Number"
      name="phone"
      value={this.state.phone}
      onChange={this.changeValue}
    />
  </FormGroup>

  <FormGroup controlId="Address">
    <ControlLabel>Street Address</ControlLabel>
    <FormControl
      type="text"
      placeholder="Address"
      name="address"
      value={this.state.address}
      onChange={this.changeValue}
    />
  </FormGroup>
  <FormGroup controlId="City">
    <ControlLabel>City</ControlLabel>
    <FormControl
      type="text"
      placeholder="City"
      name="city"
      value={this.state.city}
      onChange={this.changeValue}
    />
  </FormGroup>
  <FormGroup controlId="State">
    <ControlLabel>State</ControlLabel>
    <FormControl
      type="text"
      placeholder="State"
      name="usstate"
      value={this.state.usstate}
      onChange={this.changeValue}
    />
  </FormGroup>

  <FormGroup controlId="Zipcode">
    <ControlLabel>Zipcode</ControlLabel>
    <FormControl
      type="text"
      placeholder="Zipcode"
      name="zip"
      value={this.state.zip}
      onChange={this.changeValue}
    />
  </FormGroup>

<Row>

  <OverlayTrigger placement="top" overlay={submit}>
  <FontAwesome
    onClick={this.addData}
    className='fa-check-square-o'
    name='submit'
    fixedWidth={true}
    type="submit"
    size="5x"
    style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
    />


  </OverlayTrigger>
  <OverlayTrigger placement="top" overlay={cancel}>
    <FontAwesome
      onClick={this.props.closeModal}
      className='fa-ban pull-right'
      name='cancel'
      fixedWidth={true}
      size="5x"
      style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
      />
    </OverlayTrigger>
</Row>

  </Form>

  </div>
    );
  }

}

export default ContactForm;
