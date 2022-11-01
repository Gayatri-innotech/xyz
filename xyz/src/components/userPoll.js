import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetApiAction, PostVoteApiAction } from '../redux/action/action';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import getDetailsByHooks from '../hooks/getDetailsByHooks';

const UserPoll = () => {
    const [option, setOption] = useState();
    const { id } = useParams();

    const dispatch = useDispatch();
    const responseData = useSelector((state) => state.reducer.details);
    const [detailsById] = getDetailsByHooks(id);

    useEffect(() => {
        dispatch(GetApiAction());
    }, [dispatch]);

    useEffect(() => {
        dispatch(PostVoteApiAction());
    }, [dispatch]);

    const clickHandler = (e) => {
        e.preventDefault();
        const finalData = {
            option
        }
        dispatch(PostVoteApiAction(finalData, id));
        console.log('****---', id);
    }

    const result = responseData ? responseData.map((data, index) => {
        return (
            <div key={index}>

                <div className="card">
                    <h5 className="card-header">{data['title']}</h5>
                    <div className="card-body">
                        {data.options.map((item, index) =>
                            <h6 key={index}>
                                <span >
                                    <input type="radio" name={data['_id']} value={item.option}
                                        onChange={e => setOption(e.target.value)} />&nbsp; {item.option}
                                </span>
                                &nbsp;
                            </h6>
                        )}
                        <Link to={`${data._id}`}>
                            <button type="button" className="btn btn-outline-info"
                                onClick={(e) => { clickHandler(e) }}>
                                Submit Vote</button>
                        </Link>
                    </div>
                </div>

            </div>
        )
    }) : null;
    return (
        <div className='container'>
            <Link to='/'>
                    <button type='button' className='btn btn-primary'>Logout</button>
                </Link>
            <br /><h1>User Poll</h1><br />
            {/* <p>{option}</p> */}
            <h1>{result}</h1>
        </div>
    )
}

export default UserPoll