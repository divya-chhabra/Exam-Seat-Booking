import React,{ useState, useEffect} from "react";
import { Link } from "react-router-dom";



const ExamForm = ({id}) => {
  const [user, setUser] = useState({name:"",age:"",gender:"Male",examId:"", seatNo:"" });
  useEffect(()=>setUser({...user,examId:id}),[]);
  return (
    <>
     <form class="w-full max-w-sm py-3 px-6 shadow-sm border">
        
          <h1 className="text-2xl mb-2 text-center"> Register for Exam</h1>
     
        <div className="mb-6">
          <div>
            <label
              className="block text-gray-500 font-bold mb-1 md:mb-0 pr-4"
            >
              Name
            </label>
          </div>
          <div className="">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
              id="name"
              type="text"
              value={user.name}
              onChange={(e)=>setUser({...user,name:e.target.value})}
            />
          </div>
        </div>

        {/* Age */}

        <div class="mb-6">
          <div >
            <label
              class="block text-gray-500 font-bold mb-1 md:mb-0 pr-4"
              
            >
              Age
            </label>
          </div>
          <div >
            <input
              class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
              id="age"
              type="text"
              value={user.age}
              onChange={(e)=>setUser({...user,age:e.target.value})}
            />
          </div>
        </div>

        {/* Gender */}

        <div class="mb-6">
          <div >
            <label
              class="block text-gray-500 font-bold mb-1 md:mb-0 pr-4"
              
            >
              Gender
            </label>
          </div>
          <div>
            <select
              class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="gender" defaultValue="Male" onChange={(e)=>setUser({...user,gender:e.target.value})}>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        <div class="md:flex md:items-center">
          <div ></div>
          <div>
            
            <Link to="/booking/" state={user}
              className="shadow bg-green-500 hover:bg-green-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            >
              Select Seat
            </Link>
           
          </div>
        </div>
      </form>
    </>
  );
};

export default ExamForm;
