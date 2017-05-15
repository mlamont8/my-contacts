import React from 'react';
import {Form, FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap';

class ModalForm extends React.Component {

// constructor(props) {
//   super(props);
//   this.state = {
//     name: '',
//     email: '',
//     phone: '',
//     address: ''
//   };
// }
//
// }

changeValue(e) {
  const name = e.target.name;
  const value = e.target.value;
  console.log(e.target.name)
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


  <Button type="submit" onClick={this.props.closeModal}>
  Submit
</Button>
  </Form>
    );
  }

}

export default ModalForm;
