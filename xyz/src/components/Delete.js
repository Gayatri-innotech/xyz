import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { DeleteApiAction, GetApiAction } from '../redux/action/action';


const Delete = ({ id }) => {

    const [show, setShow] = useState(false);
    const handleClick = () => {
        dispatch(DeleteApiAction(id))
        navigate('/homes')
    }

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleClose = () => {
        setShow(false);
        dispatch(GetApiAction())
    }

    const handleShow = () => setShow(true);
    return (
        <>
            <FontAwesomeIcon
                className='trash'
                onClick={handleShow}
                icon={faTrash}
            />

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        Delete Poll
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure you want to delete? Poll
                    Once you click on Confirm Delete, you cannot Undo it!
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant="secondary"
                        onClick={handleClose}>
                        Close
                    </Button>
                    <Button
                        onClick={handleClick}
                        variant="primary">Confirm Delete</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Delete