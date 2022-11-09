import { faPen } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Edit = ({ id }) => {
    return (
        <Link to={`/edit/${id}`}>
            <FontAwesomeIcon icon={faPen} />
        </Link>
    )
}

export default Edit