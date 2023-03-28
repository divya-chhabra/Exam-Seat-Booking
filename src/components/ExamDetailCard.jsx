import React from 'react'
import { Link } from "react-router-dom";

const ExamDetailCard = ({examData}) => {
  return (
    
      <div className='col-span-1 border shadow-sm p-3 '>
        <Link to={"/register/"+examData.id} key={examData.id}  className='flex  mb-2 space-x-4'>
        <div className='exam-image w-[30%]'>
            <img src={examData.image}/>
        </div>
        <div className='exam-text-details'>
          <h3 className='font-medium'>{examData.title}</h3>
          <p>{examData.year}</p>
          <p className='text-xs'>{examData.detail1}</p>
        </div>
        </Link>
      </div>
  )
}

export default ExamDetailCard