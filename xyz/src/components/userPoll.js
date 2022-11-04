import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { GetApiAction, PostVoteApiAction } from '../redux/action/action';

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
                                    <span name={data['_id']} value={item.option}
                                    />&nbsp; {item.option}
                                    <span type="button" className="remove"
                                        onClick={() => dispatch(PostVoteApiAction({ id: data._id, option: item.option }))}>
                                        Submit Vote</span>
                                </span>
                                &nbsp;
                            </h6>
                        )}

                    </div>
                </div>
            </div>
        )
    }) : null;
    return (
        <div className='container'>
            <br /><h1>User Poll</h1><br />
            <Link to='/'>
                <button type="button" className="btn btn-outline-primary">Logout</button>
            </Link>
            <h1>{result}</h1>
        </div>
    )
}

export default UserPoll