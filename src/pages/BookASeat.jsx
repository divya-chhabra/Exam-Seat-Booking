import React from 'react'
import SeatsList from '../components/SeatsList';
import { useLocation } from 'react-router-dom';


const BookASeat = () => {

  const { state } = useLocation();
  console.log(state);
  
  return (
    <div className='p-8'>
        <SeatsList user={state}/>
    </div>
  )
}

export default BookASeat