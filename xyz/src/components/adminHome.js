import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetApiAction, DeleteApiAction, DeleteOptionApiAction } from '../redux/action/action';
import { Link } from 'react-router-dom';

const AdminHome = () => {
    const dispatch = useDispatch();
    const responseData = useSelector((state) => state.reducer.details);
    const deleteOption = useSelector((state) => state.reducer.deleteOption);
    // console.log('-*-*-*-', deleteOption);
    useEffect(() => {
        dispatch(GetApiAction());
    }, [dispatch]);

    const result = responseData ? responseData.map((data, index) => {
        // console.log('DATA----', data['options']);
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
                                    <span
                                        onClick={() => dispatch(DeleteOptionApiAction(data._id))}>
                                        X
                                    </span> &nbsp;
                                    <input className='form-check-input' type="radio" name={data['_id']} />
                                </span> &nbsp;
                                {item.option}
                            </h6>
                        )}
                        <Link to={`/forms/${data._id}`}>
                            <button type="button" className="btn btn-outline-warning">Add New Options</button>
                        </Link>
                        <button type="button" className="btn btn-outline-danger" onClick={() => dispatch(DeleteApiAction(data._id))}>Delete Poll</button>
                    </div>
                </div>
            </div >
        )
    }) : null;
    return (
        <div className='container'>
            <h1>Admin Poll Page</h1><br />
            <Link to='/'>
                <button type='button' className='btn btn-primary'>Logout</button>
            </Link>
            <Link to='/form'>
                <button type="button" className="btn btn-outline-success">Add New Poll</button>
            </Link>
            <Link to='/user'>
                <button type="button" className="btn btn-outline-info">List Users</button>
            </Link><br /><br />
            {/* <Link to='/'>
                <button>User Page</button>
            </Link><br /><br /> */}
            <h1>{result}</h1>
        </div>
    )
}

export default AdminHome