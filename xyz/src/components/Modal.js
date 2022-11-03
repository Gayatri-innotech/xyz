import React from 'react'

const Modal = ({setModal}) => {
  return (
    <div className='modalBackground'>
        <div className='modalContainer'>
            <button onClick={()=> setModal(false)}>X</button>
            <div className='title'>
                <h1>Are you sure you want to continue?</h1>
            </div>
            <div className='body'>
                <p>Once you agree to delete, you cannot undo it!</p>
            </div>
            <div className='footer'>
                <button id='cancelBtn' onClick={()=>setModal(false)}>Cancel</button>
                <button>Continue</button>
            </div>
        </div>
    </div>
  )
}

export default Modal