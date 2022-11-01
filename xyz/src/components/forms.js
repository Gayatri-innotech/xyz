import React, { useState } from 'react'
import { PostApiAction } from '../redux/action/action';
import { useDispatch, useSelector } from 'react-redux';

export const Forms = () => {

    const [title, setTitle] = useState('');
    const [option1, setOption1] = useState('');
    const [option2, setOption2] = useState('');
    const [option3, setOption3] = useState('');
    const [option4, setOption4] = useState('');


    const dispatch = useDispatch();
    // const isResponse = useSelector((state) => state.reducer.isResponse);
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
            option2: option2,
            option3: option3,
            option4: option4,
        };
        dispatch(PostApiAction(finalData));
        // console.log('****', finalData);
    };

    // if (isResponse) {
    //     alert('Add New Poll Sucessfully');
    // }
    return (
        <div className='container add'>
            <h1>Add New Poll</h1>
            <input onChange={(e) => titleHandler(e)} type="text" placeholder='Add Title' className='form-control' /> <br />
            <input onChange={(e) => optionHandler1(e)} className='form-control' placeholder='Add Option 1' type="text" /><br />
            <input onChange={(e) => optionHandler2(e)} className='form-control' placeholder='Add Option 2' type="text" /><br />
            <input onChange={(e) => optionHandler3(e)} className='form-control' placeholder='Add Option 3' type="text" /><br />
            <input onChange={(e) => optionHandler4(e)} className='form-control' placeholder='Add Option 4' type="text" /><br />
            <button onClick={(e) => { clickHandler(e) }} className='btn btn-info'>Submit</button>
        </div>
    )
}

export default Forms;