import React, { useState, useEffect } from 'react'
import { PostOptionApiAction } from '../redux/action/action';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import getDetailsByHooks from '../hooks/getDetailsByHooks';
import { Link } from 'react-router-dom';

export const Form = () => {
    const { id } = useParams();
    const [title, setTitle] = useState('');

    const dispatch = useDispatch();
    // const isResponse = useSelector((state) => state.reducer.isResponse);
    const [detailsById] = getDetailsByHooks(id);
    // console.log('detailsById is=>', detailsById);
    useEffect(() => {
        const data = () => {
            if (detailsById.data) {
                setTitle(detailsById.data.data['title']);
                // console.log('++++++++++', detailsById.data.data['options'][0]['option']);
                // setOption1(detailsById.data.data['options'][0]['option']);
                // setOption2(detailsById.data.data['options'][1]['option']);
                // setOption3(detailsById.data.data['options'][2]['option']);
                // setOption4(detailsById.data.data['options'][3]['option']);
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
    };

    // if (isResponse) {
    //     alert('Add New Poll Sucessfully');
    // }
    return (
        <div className='container add'>
            <h1>Add New Option</h1>
            <input onChange={(e) => titleHandler(e)} type="text" placeholder='Add Title' className='form-control' /> <br />
            <button onClick={(e) => { clickHandler(e) }} className='btn btn-info'>Submit</button>
        </div>
    )
}

export default Form;