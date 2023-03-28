import React, { useState, useEffect } from 'react';
import { API_URL } from '../constants';
import { useDispatch, useSelector } from 'react-redux';
import { storeExamDetails} from '../utils/examSlice';
import ExamDetailCard from '../components/ExamDetailCard';




const Home = () => {
  const dispatch = useDispatch();
  const [examsData, setExamsData] = useState([]);
  const users = useSelector(store => store.usersInfo.users)
  useEffect(()=>{
    async function getExamInfo(){
      const response = await fetch(API_URL);
      const responseJSON = await response.json();
      responseJSON.id = 7;
      dispatch(storeExamDetails(responseJSON));
      setExamsData([responseJSON]);
    }
    getExamInfo();

    // return ()=>{
    //   dispatch(clearExamDetails());
    // }
  },[])

  return (
    <div className='p-8'>
      {
        examsData?.length > 0 ?
        (
          <div class="grid grid-cols-2 gap-5">
            {
              examsData.map((examData)=><ExamDetailCard examData={examData} key={examData.id} />)        
            }
            
          </div>
        )
        :
        <h1>Loading...</h1>
      
      }

      { users.length>0 ? users.map((user)=> 
      <label className='bg-green-500 m-4 block w-80'>
        {user.name} is registered at {user.seatNo}
      </label> 
      ) : <label className='bg-red-500 m-4 inline-block'>No users registered for this Exam</label>
    }
      
    </div>
  )
}

export default Home