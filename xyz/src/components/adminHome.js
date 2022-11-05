import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetApiAction, DeleteApiAction, DeleteOptionApiAction, PostVoteApiAction } from '../redux/action/action';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const AdminHome = () => {

    const [show, setShow] = useState(false);
    const [shows, setShows] = useState(false);

    const handleClose = () => {
        setShow(false);
        dispatch(GetApiAction())
    }
    const handleShow = () => setShow(true);

    const handleCloses = () => {
        setShows(false);
        dispatch(GetApiAction())
    }
    const handleShows = () => setShows(true);
    const authOut = useSelector(state=>state.authSlice)
    const navigate = useNavigate();
    const responseData = useSelector((state) => state.reducer.details);
    const dispatch = useDispatch();

    const handleOut =() => {
        localStorage.clear('')
        navigate('/')
    }
    useEffect (() => {
        if(authOut?.null)
        navigate('/')
    })

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

                                    {/* {data.option2.map((item, index) => {
                                        <>
                                        <h6> key = {index}</h6>
                                        <input type="radio" className="btn btn-outline-primary"
                                        />
                                        <span name={data['_id']} value={item.option2} />
                                    {item.option2}
                                        </>
                                    })} */}



                                    <button className="remove" value={item.option}
                                      onClick={handleShows}  >X
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
                                    Are you sure you want to delete?
                                    Once you click on Confirm Delete, you cannot Undo it!
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleCloses}>
                                        Close
                                    </Button>
                                    <Button onClick={() => dispatch(DeleteOptionApiAction({ pollid: data._id, option: item.option }))} variant="primary">Confirm Delete</Button>
                                </Modal.Footer>
                            </Modal>

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
                <button type="button" onClick={handleOut} className="btn btn-outline-primary">Logout</button>
            
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