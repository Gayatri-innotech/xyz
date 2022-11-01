import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetApiAction, DeleteApiAction } from '../redux/action/action';
import { Link } from 'react-router-dom';

const UserPoll = () => {
    const dispatch = useDispatch();
    const responseData = useSelector((state) => state.reducer.details);
    useEffect(() => {
        dispatch(GetApiAction());
    }, [dispatch]);

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
                        <Link >
                            <button type="button" className="btn btn-warning">Submit Vote</button>
                        </Link>
                    </div>
                </div>

            </div>
        )
    }) : null;
    return (
        <div className='container'>
            <br /><h1>Poll Page</h1><br />
            <h1>{result}</h1>
        </div>
    )
}

export default UserPoll