import { faPen } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Edit = () => {
    const responseData = useSelector((state) => state.reducer.details);
    const result = responseData ? responseData.map((data, index) => {
    return (
        <Link to={`/edit/${data._id}`}>
            <FontAwesomeIcon icon={faPen} />
        </Link>
    )
    }):null
    return(
        <h1>{result}</h1>
    )
}

export default Edit