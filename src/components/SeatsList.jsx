import React, { useState } from "react";
import Seat from "./Seat";
import { storeUserInfo } from "./../utils/userSlice";
import { storeInEligibleSeats} from "./../utils/seatsSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const SeatsList = ({user}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  var rowNames = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
  ];

  var colNames = [1, 2, 3, 4, 5, 6];

  const inEligibleSeats = useSelector(store => store.seatsInfo.inEligibleSeats)

  const handleBooking = (e) =>{
    // dispatch (update the user info in userSlice)
    dispatch(storeUserInfo({...user,seatNo:e.target.innerHTML}));
    dispatch(storeInEligibleSeats(e.target.innerHTML));
    navigate("../");
    
  }
  console.log(inEligibleSeats);
  return (

    <div>
      <h2>Select a Seat</h2>
      <ul className="flex flex-wrap w-52">
        {rowNames.map((row, index) => {
          const notForFemales = row == "M" && user.gender == 'Female';
          const notforAdults =  ["H","I","J","K","L","M"].includes(row) && user.age >= 30;
          return (
            <>
              {colNames.map((col, index) => {
                var seatNum = row+col
                const notForTeenagers = user.age <= 20 && (col==1 || col==6)
                return col % 3 === 0 ? (
                  <>
                    <Seat seatNum={seatNum} booked={inEligibleSeats.includes(seatNum) || notForFemales || notForTeenagers || notforAdults} onClick={handleBooking} />
                    <div className="w-3 h-3"></div>
                  </>
                ) : (
                  <Seat disabled={true} seatNum={seatNum} booked={inEligibleSeats.includes(seatNum) || notForFemales || notForTeenagers || notforAdults} onClick={handleBooking}/>
                );
              })}
              <br />
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default SeatsList;
