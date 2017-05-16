import React from 'react';
import {Form, FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap';

class ModalUpdateForm extends React.Component {

changeValue: (e: any) => void;

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
  }

this.changeValue=this.changeValue.bind(this);
}
componentWillReceiveProps(nextProps) {
  // Check to prevent an unneeded render
  if (nextProps.name !== this.state.name) {
    this.setState({
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      address: this.state.address,
      city: this.state.city,
      usstate: this.state.usstate,
      zip: this.state.zip

    });
  }
}

changeValue(e: any) {
  let name = e.target.name;
  let value = e.target.value;
  console.log(e.target.name, e.target.value)
  this.setState({
    [name]: value
  })
}

// addContact(){
//   e.preventDefault();
// let newContact = {
//   name: this.state.name,
//   email: this.state.email,
//   phone: this.state.phone,
//   address: this.state.address
// }
// this.setState({
//   name: '',
//   email: '',
//   phone: '',
//   address: ''
// })
//
//  base.push('contacts', {
// data: {
//     name: newContact.name,
//     email: newContact.email,
//     phone: newContact.phone,
//     address: newContact.address
// },
// then(err){
// if(!err){
//
//   console.log('Successfully Added');
// }
// }
// });
//
// }

updateContact() {

//    e.preventDefault();
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


  const array = this.props.contacts
  const index = this.props.index
  array.splice(index, 1);
  this.setState({contacts: array });
  array.push(newContact)

}

  render() {
    return (
      <Form>
  <FormGroup controlId="Full Name">
    <ControlLabel>Full Name</ControlLabel>
    <FormControl
      type="text"
      placeholder="Full Name"
      name="name"
      value={this.props.currentContact.name}
      onChange={this.changeValue}
    />
  </FormGroup>

  <FormGroup controlId="Email Address">
    <ControlLabel>Email Address</ControlLabel>
    <FormControl
      type="text"
      placeholder="Email Address"
      name="email"
      value={this.props.currentContact.email}
      onChange={this.changeValue}
    />
  </FormGroup>
  <FormGroup controlId="Phone Number">
    <ControlLabel>Phone Number</ControlLabel>
    <FormControl
      type="text"
      placeholder="Phone Number"
      name="phone"
      value={this.props.currentContact.phone}
      onChange={this.changeValue}
    />
  </FormGroup>

  <FormGroup controlId="Address">
    <ControlLabel>Address</ControlLabel>
    <FormControl
      type="text"
      placeholder="Address"
      name="address"
      value={this.props.currentContact.address}
      onChange={this.changeValue}
    />
  </FormGroup>
  <FormGroup controlId="City">
    <ControlLabel>City</ControlLabel>
    <FormControl
      type="text"
      placeholder="City"
      name="city"
      value={this.props.currentContact.city}
      onChange={this.changeValue}
    />
  </FormGroup>
  <FormGroup controlId="State">
    <ControlLabel>State</ControlLabel>
    <FormControl
      type="text"
      placeholder="State"
      name="usstate"
      value={this.props.currentContact.usstate}
      onChange={this.changeValue}
    />
  </FormGroup>

  <FormGroup controlId="Zipcode">
    <ControlLabel>Zipcode</ControlLabel>
    <FormControl
      type="text"
      placeholder="Zipcode"
      name="zip"
      value={this.props.currentContact.zip}
      onChange={this.changeValue}
    />
  </FormGroup>


  <Button type="submit" onClick={this.updateContact}>
  Submit
</Button>
  </Form>
    );
  }

}

export default ModalUpdateForm;
