import { setData } from "./Reducers/activeDataSlice";
import { useSelector, useDispatch } from "react-redux";

const Card = ({ data }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="w-[354px] h-[473px] bg-white rounded-[15px] flex flex-wrap justify-center ">
        <img src={data?.img} alt="Image" />
        <h6 className="mt-7 w-[343px] text-center">{data?.status}</h6>
        <h2 className="font-bold">{data?.details}</h2>
        <button
          onClick={() => dispatch(setData(data))}
          className="bg-[#44924C] text-white w-[182.55px] h-[42px] rounded-[10px]"
        >
          Participate Now
        </button>
      </div>
    </>
  );
};

export default Card;
