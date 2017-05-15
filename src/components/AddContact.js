import React from 'react';
import {Form, FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap';
import Rebase  from 're-base'

// Initialize Re-base for Firebase Database
const base = Rebase.createClass({
  apiKey: "AIzaSyAHbDANW8lODFkutIND_PyVVU4DVM_5Wok",
  authDomain: "my-contacts-8f8a0.firebaseapp.com",
  databaseURL: "https://my-contacts-8f8a0.firebaseio.com",
  storageBucket: "my-contacts-8f8a0.appspot.com"
});

class AddContact extends React.Component {

constructor(props) {
  super(props);
  this.state = {
    contacts: [],
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    usstate: '',
    zip: ''

  };
  // make sure the "this" variable keeps its scope
  this.changeValue = this.changeValue.bind(this);
  this.addData = this.addData.bind(this);

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

addData(e){
  e.preventDefault();
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
  address: ''
})

 base.push('contacts', {
data: {
    name: newContact.name,
    email: newContact.email,
    phone: newContact.phone,
    address: newContact.address,
    city: this.state.city,
    usstate: this.state.usstate,
    zip: this.state.zip
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
    <ControlLabel>Address</ControlLabel>
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


  <Button type="submit" onClick={this.props.closeModal}>
  Submit
</Button>
  </Form>
    );
  }

}

export default AddContact;
