import { useSelector, useDispatch } from "react-redux";
import { editData } from "./Reducers/activeDataSlice";
import { setData } from "./Reducers/allDataSlice";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";

const CardDetailsPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cardDetailsData = useSelector((state) => state?.activeDataSlice?.data);
  const allData = useSelector((state) => state?.allDataSlice?.data);

  const [isEditing, setIsEditing] = useState(false);
  const [editDetails, setEditDetails] = useState(cardDetailsData?.details);
  const [editOverview, setEditOverview] = useState(cardDetailsData?.overview);

  const [remainingTime, setRemainingTime] = useState("");

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    if (editDetails && editOverview) {
      const updatedData = {
        ...cardDetailsData,
        details: editDetails,
        overview: editOverview,
      };

      dispatch(editData(updatedData));

      const updatedAllData = allData.map((item) =>
        item.details === cardDetailsData.details ? updatedData : item
      );
      dispatch(setData(updatedAllData));

      setIsEditing(false);
    }
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      const filteredData = allData.filter(
        (d) => d.details !== cardDetailsData.details
      );
      dispatch(setData(filteredData));
      navigate("/");
    }
  };
  const calculateRemainingTime = (endTime) => {
    const currentTime = new Date();
    const end = new Date(endTime);

    const difference = end - currentTime; 

    if (difference <= 0) {
      return "Time's up!";
    }
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

    return `${days}d ${hours}h ${minutes}m remaining`;
  };

  useEffect(() => {
    if (cardDetailsData?.endTime) {
 
      setRemainingTime(calculateRemainingTime(cardDetailsData?.endTime));
      const interval = setInterval(() => {
        setRemainingTime(calculateRemainingTime(cardDetailsData?.endTime));
      }, 60000);

      return () => clearInterval(interval); 
    }
  }, [cardDetailsData?.endTime]);

  return (
    <>
      <div className="h-[419px] bg-[#003145]">
        <div className="h-[228px] ml-[126px] mt-[160px] absolute">
          <p className=" bg-yellow-300 w-[464px]">{remainingTime}</p>
          {isEditing ? (
            <>
              <input
                type="text"
                value={editDetails}
                onChange={(e) => setEditDetails(e.target.value)}
                className="text-4xl text-white bg-transparent border-b border-white"
              />
            </>
          ) : (
            <h1 className="text-4xl text-white">{cardDetailsData?.details}</h1>
          )}
          <p className="text-white mt-4 font-bold">
            Identify the class to which each butterfly belongs to
          </p>
        </div>
      </div>
      <div className="h-[66px] bg-white flex justify-between pl-[40px] pr-[40px] items-center">
        <div className="w-[133px] h-[53px] font-bold items-center flex ml-[84px]">
          Overview
        </div>
        <div>
          {isEditing ? (
            <button
              onClick={handleSave}
              className="mr-3 bg-blue-700 w-[91px] h-[37px] rounded-lg text-white"
            >
              Save
            </button>
          ) : (
            <button
              onClick={handleEdit}
              className="mr-3 bg-green-900 w-[91px] h-[37px] rounded-lg text-white"
            >
              Edit
            </button>
          )}
          <button
            onClick={handleDelete}
            className="bg-red-700 w-[91px] h-[37px] rounded-lg text-white"
          >
            Delete
          </button>
        </div>
      </div>
      <div className="bg-white flex">
        <div className="w-[956px] h-[322px] ml-[126px] mt-[100px] absolute">
          {isEditing ? (
            <textarea
              value={editOverview}
              onChange={(e) => setEditOverview(e.target.value)}
              className="w-full h-full border border-gray-300 rounded-lg p-2"
            />
          ) : (
            <p>{cardDetailsData?.overview}</p>
          )}
        </div>
      </div>
    </>
  );
};

export default CardDetailsPage;
