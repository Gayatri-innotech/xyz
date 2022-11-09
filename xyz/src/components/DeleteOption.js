import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { DeleteOptionApiAction } from '../redux/action/action';

const DeleteOption = ({id, ids}) => {
    const [shows, setShows] = useState(false);

    const handleCloses = () => {
        setShows(false);
    }
    const handleShows = () => setShows(true);
    const dispatch = useDispatch();

    return (
        <>
            <button
                className="remove"
                value={ids}
                onClick={handleShows}>
                X
            </button>

            <Modal
                show={shows}
                onHide={handleCloses}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Delete Option</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure you want to delete this option?
                    Once you click on Confirm Delete, you cannot Undo it!
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant="secondary"
                        onClick={handleCloses}>
                        Close
                    </Button>
                    <Button
                        onClick={() =>
                            dispatch(DeleteOptionApiAction(id))}
                        variant="primary">Confirm Delete</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default DeleteOption