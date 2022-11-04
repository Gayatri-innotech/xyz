// import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
// import { useDispatch, useSelector } from 'react-redux';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faTrash } from '@fortawesome/free-solid-svg-icons'
// import { DeleteApiAction } from '../redux/action/action';

// const Del = () => {
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);
//   const responseData = useSelector((state) => state.reducer.details);
//   const dispatch = useDispatch();


// //   const result = responseData ? responseData.map((data, index) => {
//   return (
//     <>
//       <FontAwesomeIcon onClick={handleShow} icon={faTrash} />

//       <Modal
//         show={show}
//         onHide={handleClose}
//         backdrop="static"
//         keyboard={false}
//       >
//         <Modal.Header closeButton>
//           <Modal.Title>Delete Poll</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           Are you sure you want to delete?
//           Once you click on Confirm Delete, you cannot Undo it!
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//           <Button onClick={(data) => dispatch(DeleteApiAction(data._id))} variant="primary">Confirm Delete</Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   )

// }

// export default Del