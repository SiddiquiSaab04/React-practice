import React from 'react'
import Modal from '../Modals/Modal';
import { useState } from 'react';
const Hello = ({title}) => {
        const [openModal, setOpenModal] = useState(false);
  
    function modalOpening(){
        setOpenModal(true)
    }
  return (
    <div><button className='p-3 rounded-xl bg-purple-300' onClick={modalOpening}>{title}</button>
    {
        openModal && <Modal openModal={setOpenModal}/>
    }
    </div>
  )
}

export default Hello