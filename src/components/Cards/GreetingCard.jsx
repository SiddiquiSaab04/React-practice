import React, { useState } from 'react'

export const GreetingCard = ({user,onLike}) => {
    const [click,setClick] = useState(false);
      function sentGift(){
        alert(`Gift sent to ${user}`);
        setClick(true)
      }
  return (
    <div>
        GreetingCard
        Hello:{user} <br></br>
        <button className={` ${click ? "bg-gray-500": "bg-purple-300"}`} disabled={click} onClick={sentGift}>{click ? "Gift Sent":"Send the gift"}</button> <br></br>
        <button className='px-3 bg-fuchsia-400' onClick={()=>onLike(user)}>Like</button>
    </div>
  )
}
