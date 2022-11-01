import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetApiAction, DeleteApiAction } from '../redux/action/action';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const responseData = useSelector((state) => state.reducer.details);
    useEffect(() => {
        dispatch(GetApiAction());
    }, [dispatch]);

    // const handleDelete = (data) => {
    //     dispatch(DeleteApiAction(data._id))
    //     console.log('deleted')
    //     navigate('/')
    // }

    const result = responseData ? responseData.map((data, index) => {
        return (
            <div key={index}>

                <div className="card">
                    <h5 className="card-header">{data['title']}</h5>
                    <div className="card-body">
                        {data.options.map((item, index) =>
                            <h6 key={index}>
                                <span >
                                    <input className='form-check-input' type="radio" name={data['_id']} />
                                </span>
                                &nbsp;{item.option}
                            </h6>
                        )}
                        <Link to={`/edit/${data._id}`}>
                            <button type="button" className="btn btn-warning">Edit</button>
                        </Link>
                        <button type="button" className="btn btn-danger" onClick={() => dispatch(DeleteApiAction(data._id))}>Delete</button>
                    </div>
                </div>

            </div>
        )
    }) : null;
    return (
        <div className='container'>
            <h1>Admin Poll Page</h1><br />
            <Link to='/form'>
                <button type="button" className="btn btn-success">Add New Poll</button>
            </Link>
            <Link to='/user'>
                <button type="button" className="btn btn-info">List Users</button>
            </Link><br /><br />
            <h1>{result}</h1>
        </div>
    )
}

export default Home