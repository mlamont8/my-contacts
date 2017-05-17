import React from 'react';
import {OverlayTrigger, Modal, Row, Tooltip} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';


// Tooltip Comments
  const cancel = (
    <Tooltip id="cancelForm"><strong>Cancel</strong></Tooltip>
  );


class ViewContainer extends React.Component {

  render() {
    return(
    <Modal
      show={this.props.showView}
      onHide={this.props.closeView}
      >
       <Modal.Header closeButton>

         <Row>
        <h1> {this.props.currentContact.name}</h1>
          <p>{this.props.currentContact.address} </p>
          <p>{this.props.currentContact.city}, {this.props.currentContact.state} {this.props.currentContact.zip}</p>
       </Row>
           <Row className="text-center"><h1> +1{this.props.currentContact.phone}</h1></Row>

       </Modal.Header>
       <Modal.Body>



     </Modal.Body>
       <Modal.Footer>

       <OverlayTrigger placement="top" overlay={cancel}>
         <FontAwesome
           onClick={this.props.closeView}
           className='fa-ban pull-right'
           name='cancel'
           fixedWidth={true}
           size="5x"
           style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
           />
         </OverlayTrigger>
       </Modal.Footer>
     </Modal>
)
}

}
export default ViewContainer;
