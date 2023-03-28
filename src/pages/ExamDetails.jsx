import React from 'react'
import ExamDetailCard from '../components/ExamDetailCard'
import ExamForm from '../components/ExamForm';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';


const ExamDetails = () => {
  const {id} = useParams();
  const examsData = useSelector(store=>store.examInfo.examDetails);
  const currentItem = examsData.find(item => item.id == id);

  return (
    <div className='grid grid-cols-2 gap-5 pt-8'>
      <div className='col-span-1'>
          {currentItem?.id ?  <ExamDetailCard examData={currentItem}/> : ""} 
      </div>
      <div className='col-span-1'>
          <ExamForm id={currentItem.id}/>
      </div>
    </div>
  )
}

export default ExamDetails