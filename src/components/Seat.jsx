import React from 'react'

const Seat = ({seatNum,booked, onClick}) => {

  return (
    <div onClick={(e)=>onClick(e)} className='w-4 h-4 mr-3 mb-3' style={{"backgroundColor": (booked && "grey") || (!booked && "green"),"cursor":(booked && "not-allowed")||(!booked && "pointer")}}> 
        <p className='text-xs'>{seatNum}</p>
    </div>
  )
}

export default Seat