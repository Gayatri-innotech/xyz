import React, { useState, useEffect } from 'react'
import { PostApiAction, UpdateApiAction } from '../redux/action/action';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import getDetailsByHooks from '../hooks/getDetailsByHooks';
import { Link } from 'react-router-dom';

export const UpdateDetails = () => {
    const { id } = useParams();
    // console.log('ParamsId=>', id);
    const [title, setTitle] = useState('');
    const [option1, setOption1] = useState('');
    const [option2, setOption2] = useState('');
    const [option3, setOption3] = useState('');
    const [option4, setOption4] = useState('');

    const dispatch = useDispatch();
    // const isUpdateResponse = useSelector(state => state.reducer.isUpdateResponse);

    const [detailsById] = getDetailsByHooks(id);
    // console.log('detailsById is=>', detailsById);
    useEffect(() => {
        const data = () => {
            if (detailsById.data) {
                setTitle(detailsById.data.data['title']);
                console.log('++++++++++', detailsById.data.data['options'][0]['option']);
                setOption1(detailsById.data.data['options'][0]['option']);
                setOption2(detailsById.data.data['options'][1]['option']);
                setOption3(detailsById.data.data['options'][2]['option']);
                setOption4(detailsById.data.data['options'][3]['option']);
            }
        };
        data();
    }, [detailsById.data]);

    const titleHandler = (e) => {
        setTitle(e.target.value)
    }
    const optionHandler1 = (e) => {
        setOption1(e.target.value)
    }
    const optionHandler2 = (e) => {
        setOption2(e.target.value)
    }
    const optionHandler3 = (e) => {
        setOption3(e.target.value)
    }
    const optionHandler4 = (e) => {
        setOption4(e.target.value)
    }

    const clickHandler = (e) => {
        e.preventDefault();
        const finalData = {
            title: title,
            option1: option1,
            option2: option1,
            option3: option1,
            option4: option1,
        };
        dispatch(UpdateApiAction(finalData, id));
        console.log('****', finalData);
    };
    // if (isUpdateResponse) {
    //     alert('Sucessfull');
    // }
    return (
        <div className='container'>
            <h1>Edit Details</h1>
            <input defaultValue={title} onChange={(e) => titleHandler(e)} type="text" placeholder='Add Title' className='form-control' /> <br />
            <input defaultValue={option1} onChange={(e) => optionHandler1(e)} className='form-control' placeholder='Add Option 1' type="text" /><br />
            <input defaultValue={option2} onChange={(e) => optionHandler2(e)} className='form-control' placeholder='Add Option 2' type="text" /><br />
            <input defaultValue={option3} onChange={(e) => optionHandler3(e)} className='form-control' placeholder='Add Option 3' type="text" /><br />
            <input defaultValue={option4} onChange={(e) => optionHandler4(e)} className='form-control' placeholder='Add Option 4' type="text" /><br />
            <Link to=''>
                <button onClick={(e) => { clickHandler(e) }} className='btn btn-info'>Update Details</button>
            </Link>
        </div>
    )
}

export default UpdateDetails;