import React from 'react';
import {Table, Col, Row, Tooltip, OverlayTrigger, Panel } from 'react-bootstrap';
import Rebase  from 're-base'
import FormContainer from '../containers/FormContainer';
import ViewContainer from '../containers/ViewContainer';
import DeleteContainer from '../containers/DeleteContainer';
import FontAwesome from 'react-fontawesome';
import WeatherContainer from '../containers/WeatherContainer';



// Initialize Re-base for Firebase Database
const base = Rebase.createClass({
  apiKey: "AIzaSyAHbDANW8lODFkutIND_PyVVU4DVM_5Wok",
  authDomain: "my-contacts-8f8a0.firebaseapp.com",
  databaseURL: "https://my-contacts-8f8a0.firebaseio.com",
  storageBucket: "my-contacts-8f8a0.appspot.com"
});

// Tooltip Comments
const addContent = (
  <Tooltip id="addContent"><strong>Add Contact</strong></Tooltip>
);
const deleteContent = (
  <Tooltip id="deleteContent"><strong>Delete Content</strong></Tooltip>
);

const editContent = (
  <Tooltip id="editContent"><strong>Edit Content</strong></Tooltip>
);

const moreInfo = (
  <Tooltip id="MoreInfo"><strong>More Info</strong></Tooltip>
);


class Contacts extends React.Component {

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
      zip: '',
      showModal: false,
      addContact: false,
      currentContact: {},
      currentIndex: "",
      deleteContact: false,
      newContact: false,
      showView: false

    };
    // make sure the "this" variable keeps its scope
    this.addContact = this.addContact.bind(this);
    this.closeAdd = this.closeAdd.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.deleteAlertShow  = this.deleteAlertShow.bind(this);
    this.deleteAlertDismiss  = this.deleteAlertDismiss.bind(this);
    this.openView  = this.openView.bind(this);
    this.closeView  = this.closeView.bind(this);

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



onUpdate(contact){
console.log(contact)
}



closeAdd() {
  this.setState({
    addContact: false
   });
}

closeModal() {
  this.setState({
    showModal: false,
   });
}

  openModal(contact, idx) {
      this.setState({
        showModal: true,
        currentContact: contact,
        currentIndex: idx,
        newContact: false
       });
  }

  addContact(){
    this.setState({
      showModal: true,
      newContact: true,
      currentContact: []

    })
  }

  openView(contact){
    this.setState({
      showView: true,
      currentContact: contact

    })
  }

  closeView(){
    this.setState({
      showView: false,

    })
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
    //Lets sort for display
const sorted= this.state.contacts.sort(function(a,b)
{return (a.last_nom > b.last_nom) ? 1 :
  ((b.name > a.name) ? -1 : 0);} );

    return (
      <div>
  <Col md={10} mdOffset={1}>
    <Row>
      <OverlayTrigger placement="top" overlay={addContent}>
    <FontAwesome
      onClick={this.addContact}
      className='pull-right fa-add'
      name='plus-circle'
      size='3x'
      style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
      />
    </OverlayTrigger>
</Row>
      <Table responsive striped bordered condensed hover>
 <thead>
   <tr className="tableRow">
     <th></th>
     <th>  <FontAwesome
             className='fa-user'
             name='user'
             style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
       />  Full Name</th>
     <th>  <FontAwesome
             className='fa-envelope'
             name='envelope-o'
             style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
       />  Email Address</th>
     <th>   <FontAwesome
             className='fa-phone'
             name='phone'
             style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
       />  Phone Number</th>
     <th></th>

   </tr>
 </thead>
 <tbody>
   {sorted.map((data, index) => {
     return (
       <tr key={data.key}
         >
         <td>Avatar</td>
         <td>{data.name}</td>
         <td>{data.email}</td>
         <td>{data.phone}</td>
         <td>
           <OverlayTrigger placement="bottom" overlay={moreInfo}>
             <FontAwesome
               onClick={this.openView.bind(this, data)}
               className='fa-ellipsis-v'
               name='ellipsis'
               fixedWidth={true}
               style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
               />
             </OverlayTrigger>
           <OverlayTrigger placement="bottom" overlay={editContent}>
             <FontAwesome
               onClick={this.openModal.bind(this, data, index)}
               className='fa-pencil'
               name='pencil'
               fixedWidth={true}
               style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
               />
             </OverlayTrigger>
             <OverlayTrigger placement="bottom" overlay={deleteContent}>
               <FontAwesome
                 onClick={this.deleteAlertShow.bind(this,data, index)}
                 className='fa-trash'
                 name='trash'
                 fixedWidth={true}
                 style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                 />
               </OverlayTrigger>
         </td>
       </tr>
     )
   })}
 </tbody>
</Table>
<Panel>
  <WeatherContainer />
</Panel>
</Col>


<FormContainer
  currentContact={this.state.currentContact}
  currentIndex={this.state.currentIndex}
  showModal={this.state.showModal}
  closeModal={this.closeModal}
  contacts={this.state.contacts}
  index={this.state.currentIndex}
  newContact={this.state.newContact}

/>

<ViewContainer
  openView={this.openView}
  closeView={this.closeView}
  showView={this.state.showView}
  currentContact={this.state.currentContact}

/>

<DeleteContainer
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
