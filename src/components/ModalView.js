import React from 'react';
import {Modal, Button}  from 'react-bootstrap';

class ModalView extends React.Component {

  render() {
    return (
      <Modal
        show={this.props.showModal}
        onHide={this.props.closeModal}
        >
         <Modal.Header closeButton>
           <Modal.Title>Contact Detail</Modal.Title>
         </Modal.Header>
         <Modal.Body>

      <table>
           <tbody>

                 <tr>
                   <td>Avatar</td>
                   <td>{this.props.currentContact.name}</td>
                   <td>{this.props.currentContact.email}</td>
                   <td>{this.props.currentContact.phone}</td>
                   <td>{this.props.currentContact.index}</td>
                 </tr>

           </tbody>
      </table>
           <hr />

       </Modal.Body>
         <Modal.Footer>
           <Button onClick={this.props.closeModal}>Close</Button>
         </Modal.Footer>
       </Modal>
    );
  }

}

export default ModalView;
