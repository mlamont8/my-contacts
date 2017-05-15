import React from 'react';
import {Table, Col, Row } from 'react-bootstrap';
import Rebase  from 're-base'
import ModalUpdate from './ModalUpdate';
import ModalAdd from './ModalAdd';
import DeleteContact from './DeleteContact';
import FontAwesome from 'react-fontawesome';


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
      address: '',
      showModal: false,
      addContact: false,
      currentContact: {},
      currentIndex: "",
      deleteContact: false

    };
    // make sure the "this" variable keeps its scope
    this.addContact = this.addContact.bind(this);
    this.closeAdd = this.closeAdd.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.deleteAlertShow  = this.deleteAlertShow.bind(this);
    this.deleteAlertDismiss  = this.deleteAlertDismiss.bind(this);

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

addContact(){
  this.setState({
    addContact: true
  })
}

onUpdate(contact){
console.log(contact)
}

closeModal() {
  this.setState({
    showModal: false,
   });
}

closeAdd() {
  this.setState({
    addContact: false
   });
}

  openModal(contact, idx) {
    console.log(contact, idx)
      this.setState({
        showModal: true,
        currentContact: contact,
        currentIndex: idx
       });
  }

  deleteAlertDismiss() {
    this.setState({deleteContact: false});
  }

  deleteAlertShow(contact, idx) {
    this.setState({
      deleteContact: true,
      currentContact: contact,
      currentIndex: idx
    });
  }

  render() {

    return (
      <div>
  <Col md={10} mdOffset={1}>
    <Row>
    <FontAwesome
      onClick={this.addContact}
      className='pull-right fa-add'
      name='plus-circle'
      size='3x'
      style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
      />
</Row>
      <Table responsive striped bordered condensed hover>
 <thead>
   <tr>
     <th>Avatar</th>
     <th>Full Name</th>
     <th>Email Address</th>
     <th>Phone Number</th>
     <th></th>

   </tr>
 </thead>
 <tbody>
   {this.state.contacts.map((data, index) => {
     return (
       <tr key={data.key}
         >
         <td>Avatar</td>
         <td>{data.name}</td>
         <td>{data.email}</td>
         <td>{data.phone}</td>
         <td>

           <FontAwesome
             onClick={this.deleteAlertShow.bind(this,data, index)}
             className='pull-right fa-add'
             name='trash'
             fixedWidth={true}
             style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
             />
             <FontAwesome
               onClick={this.openModal.bind(this, data, index)}
               className='pull-right fa-add'
               name='pencil'
               fixedWidth={true}
               style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
               />
         </td>
       </tr>
     )
   })}

 </tbody>
</Table>
</Col>


<ModalUpdate
  currentContact={this.state.currentContact}
  currentIndex={this.state.currentIndex}
  showModal={this.state.showModal}
  closeModal={this.closeModal}

/>

<ModalAdd
  showModal={this.state.addContact}
  closeModal={this.closeAdd}

/>

<DeleteContact
  currentContact={this.state.currentContact}
  deleteContact={this.state.deleteContact}
  deleteAlertDismiss={this.deleteAlertDismiss}
  contacts={this.state.contacts}
  index={this.state.currentIndex}

/>

</div>
    );
  }

}

export default Contacts;
