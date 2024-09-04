import { setData } from "./Reducers/activeDataSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Card = ({ data }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <>
      <div className="w-[354px] h-[473px] bg-white rounded-[15px] flex flex-wrap justify-center mb-4">
        <img src={data?.img} alt="Image" />
        <h6 className="mt-7 w-[343px] text-center">{data?.status}</h6>
        <h2 className="font-bold">{data?.details}</h2>
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
    </>
  );
};

export default Card;
