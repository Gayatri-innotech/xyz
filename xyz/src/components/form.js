import React, { useState, useEffect } from 'react'
import { PostOptionApiAction } from '../redux/action/action';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import getDetailsByHooks from '../hooks/getDetailsByHooks';
import { Link } from 'react-router-dom';

export const Forms1 = () => {
    const { id } = useParams();
    const [title, setTitle] = useState('');

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [detailsById] = getDetailsByHooks(id);

    useEffect(() => {
        const data = () => {
            if (detailsById.data) {
                setTitle(detailsById.data.data['title']);
            }
        };
        data();
    }, [detailsById.data]);

    const titleHandler = (e) => {
        setTitle(e.target.value)
    }

    const clickHandler = (e) => {
        e.preventDefault();
        const finalData = {
            title: title,
        };
        dispatch(PostOptionApiAction(finalData, id));
        console.log('****', finalData);
        navigate('/homes')
    };

    return (
        <div className='container add'>
            <h1>Add New Option</h1>

            <input
                onChange={(e) => titleHandler(e)}
                type="text"
                placeholder='Add Options'
                className='form-control' /> <br />

            <button
                onClick={(e) => { clickHandler(e) }}
                className='btn btn-info'>
                Submit
            </button>
            <Link to='/homes'>
                <button
                    className='btn btn-outline-primary'>Back</button>
            </Link>
        </div>
    )
}

export default Forms1;