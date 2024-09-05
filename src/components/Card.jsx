import { setData } from "./Reducers/activeDataSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Card = ({ data }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [remainingTime, setRemainingTime] = useState("");
  console.log(data);

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
    if (data?.endTime) {
      // Set the initial remaining time
      setRemainingTime(calculateRemainingTime(data?.endTime));

      // Update the remaining time every minute
      const interval = setInterval(() => {
        setRemainingTime(calculateRemainingTime(data?.endTime));
      }, 60000); // Update every minute

      return () => clearInterval(interval); // Clear interval on component unmount
    }
  }, [data?.endTime]);

  return (
    <div className="w-[354px] h-[473px] bg-white rounded-[15px] flex flex-wrap justify-center mb-4">
      <img
        src={data?.img}
        alt="Image"
        className="w-full h-[200px] object-cover rounded-t-[15px]"
      />
      <h6 className="mt-7 w-[343px] text-center">{data?.status}</h6>
      <h2 className="font-bold">{data?.details}</h2>

      <p className="flex w-[100%] justify-center items-center">Starts In</p>
      <p className=" flex w-[100%] justify-center items-centertext-gray-600">
        {remainingTime}
      </p>

      <button
        onClick={() => {
          dispatch(setData(data));
          navigate("/cardDetails");
        }}
        className="bg-[#44924C] text-white w-[182.55px] h-[42px] rounded-[10px]"
      >
        Participate Now
      </button>
    </div>
  );
};

export default Card;
