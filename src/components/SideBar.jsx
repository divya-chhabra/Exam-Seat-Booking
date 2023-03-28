import React from 'react'

const SideBar = () => {
  return (
    <div className='fixed top-0 left-0 bottom-0 w-48 h-full bg-gray-300 text-center'>
      <h3 className='text-red-900 font-bold mt-3'>Exam Seat Booking</h3>
      <ul className='list-none py-4 divide-y-2 '>
        <li>Home</li>
        <li>Profile</li>
        <li>Settings</li>
      </ul>
    </div>
  )
}

export default SideBar