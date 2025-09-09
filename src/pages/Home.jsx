
import React from 'react'
import ToggleBtn from '../components/Toggle/ToggleBtn'
import { useState } from 'react'
import Modal from '../components/Modals/Modal';

function Home() {
  const [open,setOpen] = useState(false);

  return (
    <div>
      Home
           <br></br>
           <div className="w-auto mx-auto"></div>
           <button className="w-auto bg-green-600 p-1" 
           onClick={()=>setOpen(true)}
           >
            Open Modal
           </button>
           {
            open && <Modal openModal={setOpen} />
           }
    </div>
  )
}

export default Home