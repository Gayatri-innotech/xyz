import React, { useState } from 'react'
import { PostApiAction } from '../redux/action/action';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

export const Forms = () => {

    const [title, setTitle] = useState('');
    const [option1, setOption1] = useState('');
    const [option2, setOption2] = useState([{input:''}]);

    const handleClick = () => {
        setOption2([...option2,{input:''}]);
    }
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // const isResponse = useSelector((state) => state.reducer.isResponse);
    const titleHandler = (e) => {
        setTitle(e.target.value)
    }
    const optionHandler1 = (e) => {
        setOption1(e.target.value)
    }
    const optionHandler2 = (e, index) => {
        const {name, value} = e.target;
        const list = [...option2];
        list[index][name] = value;
        setOption2(list)
        console.log('fffffffff',e)
    }

    const handleRemove = index => {
        const list=[...option2];
        list.splice(index,1);
        setOption2(list);
    }

    const clickHandler = (e) => {
        e.preventDefault();
        const finalData = {
            title: title,
            option1: option1,
            option2: option2,

        };
        dispatch(PostApiAction(finalData));
        navigate('/homes')
        console.log('****', finalData);
    };

    // if (isResponse) {
    //     alert('Add New Poll Sucessfully');
    // }
    return (
        <div className='container add'>
            <h1>Add New Poll</h1>
            <input onChange={(e) => titleHandler(e)} type="text" placeholder='Add Title' className='form-control' /> <br />
            <label>Options</label>
            <input onChange={(e) => optionHandler1(e)} className='form-control' type="text" /><br />
            {option2.map((x, i) => {
                return (
                    <>
                       
                        <input onChange={e=>optionHandler2(e,i)} className='form-control' type="text" /><br />
                        {
                            option2.length!==1 && 
                            <button onClick={()=> handleRemove(i)} className='btn btn-outline-danger mx-1'>Remove</button>
                        }       
                        {
                            option2.length-1===i &&
                            <button onClick={handleClick} className='btn btn-outline-success'>Add more</button>
                        }
                        <div className='form-group'>
                            
                        </div>
                    </>
                )
            })}

            <button onClick={(e) => { clickHandler(e) }} className='btn btn-info'>Submit</button>
            <Link to='/homes'>
                <button  className='btn btn-outline-primary'>Back</button>
            </Link>

        </div>
    )
}

export default Forms;