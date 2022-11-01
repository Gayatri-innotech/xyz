import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { GetApiUserAction } from '../redux/action/action';

const Users = () => {
    const dispatch = useDispatch();
    const responseData = useSelector((state) => state.reducer.userDetails);
    console.log('data+++', responseData);
    useEffect(() => {
        dispatch(GetApiUserAction());
    }, [dispatch]);

    const result = responseData.map((data, index) => {
        return (
            <tr key={index}>
                <th scope="row">{data.password}</th>
                <td>{data.role}</td>
                <td>@{data.username}</td>
            </tr>

        )
    })
    return (
        <div className='container'>

            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">PASSWORD</th>
                        <th scope="col">ROLE</th>
                        <th scope="col">USER_NAME</th>
                    </tr>
                </thead>
                <tbody>
                    <>{result}</>
                </tbody>
            </table>

        </div>
    )
}

export default Users