import React from 'react';
import {Table, Col, Form, Button, FormGroup, ControlLabel, FormControl} from 'react-bootstrap';
import Rebase  from 're-base';


// Initialize Re-base for Firebase Database
const base = Rebase.createClass({
  apiKey: "AIzaSyAHbDANW8lODFkutIND_PyVVU4DVM_5Wok",
  authDomain: "my-contacts-8f8a0.firebaseapp.com",
  databaseURL: "https://my-contacts-8f8a0.firebaseio.com",
  storageBucket: "my-contacts-8f8a0.appspot.com"
});

class Contacts extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      name: '',
      email: '',
      phone: '',
      address: ''
    };
    // make sure the "this" variable keeps its scope
    this.changeValue = this.changeValue.bind(this);
    this.addContact = this.addContact.bind(this);
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

addContact(e){
  e.preventDefault();

  // let newContact = {
  //   name: this.state.name,
  //   email: this.state.email,
  //   phone: this.state.phone,
  //   address: this.state.address
  // }

//   this.setState({
//   contacts: this.state.contacts.concat([newContact]),
//
// });

 base.push('contacts', {
data: {
    name: this.state.name,
    email: this.state.email,
    phone: this.state.phone,
    address: this.state.address
},
then(err){
if(!err){
  console.log('Successfully Added');
}
}
});
//available immediately, you don't have to wait for the callback to be called
 // const generatedKey = Reference.key;

}

  render() {

    return (
      <div>
  <Col md={10} mdOffset={1}>
      <Table responsive striped bordered condensed hover>
 <thead>
   <tr>
     <th>Avatar</th>
     <th>Full Name</th>
     <th>Email Address</th>
     <th>Phone Number</th>

   </tr>
 </thead>
 <tbody>
   {this.state.contacts.map((data, index) => {
     return (
       <tr key={data.key}>
         <td>Avatar</td>
         <td>{data.name}</td>
         <td>{data.email}</td>
         <td>{data.phone}</td>
       </tr>
     )
   })}

 </tbody>
</Table>
</Col>

<Form horizontal onSubmit={this.addContact}>

  <FormGroup controlId="formName">
    <Col componentClass={ControlLabel} sm={2}>
      Full Name
    </Col>
    <Col sm={10}>
      <FormControl
        type="text"
        placeholder="Full Name"
        name="name"
        value={this.state.name}
        onChange={this.changeValue}
      />
    </Col>
  </FormGroup>

  <FormGroup controlId="formName">
    <Col componentClass={ControlLabel} sm={2}>
      Email Address
    </Col>
    <Col sm={10}>
      <FormControl
        type="text"
        placeholder="Email Address"
        name="email"
        value={this.state.email}
        onChange={this.changeValue}
      />
    </Col>
  </FormGroup>  <FormGroup controlId="formName">
      <Col componentClass={ControlLabel} sm={2}>
        Phone Number
      </Col>
      <Col sm={10}>
        <FormControl
          type="text"
          placeholder="Phone Number"
          name="phone"
          value={this.state.phone}
          onChange={this.changeValue}
        />
      </Col>
    </FormGroup>  <FormGroup controlId="formName">
        <Col componentClass={ControlLabel} sm={2}>
          Address
        </Col>
        <Col sm={10}>
          <FormControl
            type="text"
            placeholder="Address"
            name="address"
            value={this.state.address}
            onChange={this.changeValue}
          />
        </Col>
      </FormGroup>

  <FormGroup>
  <Col smOffset={2} sm={10}>
    <Button type="submit">
      Submit
    </Button>
  </Col>
</FormGroup>

</Form>
</div>
    );
  }

}

export default Contacts;
