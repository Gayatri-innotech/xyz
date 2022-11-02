import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetApiAction, DeleteApiAction, DeleteOptionApiAction, PostVoteApiAction } from '../redux/action/action';
import { Link } from 'react-router-dom';

const AdminHome = () => {
    const [option, setOption] = useState();
    const [id, setIde] = useState();

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
                                <button type="button" className="btn btn-outline-dark">Edit Title</button>
                            </Link>
                        </span>
                    </h5>
                    <div className="card-body">
                        {data.options.map((item, index) =>
                            <h6 key={index}>
                                <span >
                                    <span name={data['_id']} value={item.option}
                                    />&nbsp; {item.option} &nbsp;&nbsp;
                                    <button type="button" className="btn btn-outline-primary"
                                        onClick={() => dispatch(PostVoteApiAction({ id: data._id, option: item.option }))}>
                                        Submit Vote</button>

                                    <span className="remove" value={item.option}
                                        onClick={() => dispatch(DeleteOptionApiAction({ pollid: data._id, option: item.option }))}>X
                                    </span>
                                </span> &nbsp;
                            </h6>
                        )}
                        <Link to={`/forms1/${data._id}`}>
                            <button type="button" className="btn btn-outline-warning">Add New Options</button>
                        </Link>
                        <button type="button" className="btn btn-outline-danger"
                            onClick={() => dispatch(DeleteApiAction(data._id))}>Delete Poll</button>
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