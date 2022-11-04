import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetApiAction, DeleteApiAction, DeleteOptionApiAction, PostVoteApiAction } from '../redux/action/action';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const AdminHome = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const responseData = useSelector((state) => state.reducer.details);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(GetApiAction());
    }, [dispatch]);

    const result = responseData ? responseData.map((data, index) => {
        return (
            <div key={index}>
                <div className="card">
                    <h5 className="card-header">
                        {data['title']}&nbsp;
                        <span>
                            <Link to={`/edit/${data._id}`}>
                                <FontAwesomeIcon icon={faPen} />
                            </Link>
                        </span>
                        <span>
                            {/* <FontAwesomeIcon onClick={() => dispatch(DeleteApiAction(data._id))} icon={faTrash} /> */}



                            <FontAwesomeIcon onClick={handleShow} icon={faTrash} />

                            <Modal
                                show={show}
                                onHide={handleClose}
                                backdrop="static"
                                keyboard={false}
                            >
                                <Modal.Header closeButton>
                                    <Modal.Title>Delete Poll</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    Are you sure you want to delete?
                                    Once you click on Confirm Delete, you cannot Undo it!
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose}>
                                        Close
                                    </Button>
                                    <Button onClick={() => dispatch(DeleteApiAction(data._id))} variant="primary">Confirm Delete</Button>
                                </Modal.Footer>
                            </Modal>
                        </span>
                    </h5>
                    <div className="card-body">
                        {data.options.map((item, index) =>
                            <h6 key={index}>

                                <span >
                                    <input type="radio" className="btn btn-outline-primary"
                                         />
                                    <span name={data['_id']} value={item.option} />
                                    {item.option}



                                    <button className="remove" value={item.option}
                                        onClick={() => dispatch(DeleteOptionApiAction({ pollid: data._id, option: item.option }))}>X
                                    </button>
                                </span> &nbsp;
                                {/*  */}
                            </h6>
                        )}

                        <button type='button' onClick={(item) => dispatch(PostVoteApiAction({ id: data._id, option: item.option }))} className='btn btn-outline-success'>Submit Vote</button>
                        <Link to={`/forms/${data._id}`}>
                            <button type="button" className="btn btn-outline-warning">Add New Options</button>
                        </Link>
                    </div>
                </div>
            </div >
        )
    }) : null;

    return (
        <div className='container'>
            <h1>Admin Poll Page</h1><br />

            <Link to='/'>
                <button type="button" className="btn btn-outline-primary">Logout</button>
            </Link>
            <Link to='/form'>
                <button type="button" className="btn btn-outline-success">Add New Poll</button>
            </Link>
            <Link to='/user'>
                <button type="button" className="btn btn-outline-info">List Users</button>
            </Link><br /><br />
            <h1>{result}</h1>
        </div>
    )
}

export default AdminHome