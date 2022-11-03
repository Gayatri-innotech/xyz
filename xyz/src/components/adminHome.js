import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetApiAction, DeleteApiAction, DeleteOptionApiAction, PostVoteApiAction } from '../redux/action/action';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons'
import Modal from './Modal';

const AdminHome = () => {
    const [option, setOption] = useState();
    const [id, setIde] = useState();
    const [openModal, setOpenModal] = useState(false);

    const responseData = useSelector((state) => state.reducer.details);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(GetApiAction());
    }, [dispatch]);

    const result = responseData ? responseData.map((data, index) => {
        // const handleClick = () => {
        //     dispatch(DeleteOptionApiAction({ pollid: data._id, option: item.option })
        //     setOpenModal(true)
        // };
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
                            
                            <FontAwesomeIcon onClick={() => dispatch(DeleteApiAction(data._id))} icon={faTrash} />
                            
                        </span>
                    </h5>
                    <div className="card-body">
                        {data.options.map((item, index) =>
                            <h6 key={index}>

                                <span >
                                <input type="radio" className="btn btn-outline-primary"
                                        onClick={() => dispatch(PostVoteApiAction({ id: data._id, option: item.option }))}/>
                                    <span name={data['_id']} value={item.option}/>
                                     {item.option}
                                    
                                        

                                    <button className="remove" value={item.option} 
                                        onClick={() =>setOpenModal(true)}>X
                                    </button>
                                    {openModal && <Modal setOpenModal={setOpenModal}/>}
                                </span> &nbsp;
                                {/*  */}
                            </h6>
                        )}
                        
                        <button type='button' className='btn btn-outline-success'>Submit Vote</button>
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