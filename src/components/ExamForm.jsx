import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const ExamForm = ({ id }) => {
  const [user, setUser] = useState({
    name: "",
    age: "",
    gender: "Male",
    examId: "",
    seatNo: "",
  });
  useEffect(() => setUser({ ...user, examId: id }), []);


  const errRef = useRef();
  const ageNode = useRef();
  const nameNode = useRef();

  const navigate = useNavigate();

  const handleValidations = () => {
    errRef.current.innerHTML = "";

    if (user.name == "") {
      errRef.current.innerHTML = "Please enter your name";
      nameNode.current.focus();
      return;
    }
    if (user.age == "") {
      errRef.current.innerHTML = "Please enter your age";
      ageNode.current.focus();
      return;
    }
    if (isNaN(parseInt(user.age))) {
      errRef.current.innerHTML = "Please enter your proper age in number";
      ageNode.current.focus();
      return;
    }

    navigate("/booking",{state:user})
  };
  return (
    <>
      <form class="w-full max-w-sm py-3 px-6 shadow-sm border">
        <h1 className="text-2xl mb-2 text-center"> Register for Exam</h1>

        <div className="mb-6">
          <div>
            <label className="block text-gray-500 font-bold mb-1 md:mb-0 pr-4">
              Name
            </label>
          </div>
          <div className="">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
              id="name"
              type="text"
              ref={nameNode}
              value={user.name}
              onChange={(e) => { setUser({ ...user, name: e.target.value })}}
            />
          </div>
        </div>

        {/* Age */}

        <div class="mb-6">
          <div>
            <label class="block text-gray-500 font-bold mb-1 md:mb-0 pr-4">
              Age
            </label>
          </div>
          <div>
            <input
              class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
              id="age"
              type="text"
              value={user.age}
              ref={ageNode}
              onChange={(e) => setUser({ ...user, age:e.target.value})}
            />
          </div>
        </div>

        <div id="errMessage" className="text-red-600 py-2" ref={errRef}></div>

        {/* Gender */}

        <div class="mb-6">
          <div>
            <label class="block text-gray-500 font-bold mb-1 md:mb-0 pr-4">
              Gender
            </label>
          </div>
          <div>
            <select
              class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="gender"
              defaultValue="Male"
              onChange={(e) => setUser({ ...user, gender: e.target.value })}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        <div class="md:flex md:items-center">
          <div>
            <button
              type="button"
              onClick={() => {
                handleValidations();
              }}
              className="shadow bg-green-500 hover:bg-green-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            >
              Select Seat
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default ExamForm;
