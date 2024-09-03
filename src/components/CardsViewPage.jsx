import Card from "./Card";

const CardsViewPage = () => {
  return (
    <>
      <div className="h-[324px] bg-[#002A3B] ">
        <h2 className="text-white text-xl flex items-center justify-center">
          Explore Challenges
        </h2>
        <div className="flex justify-center items-center">
          <input
            className="w-[823px] h-[50px] mt-[45px] rounded-2xl pl-[52px]"
            placeholder="Search"
          ></input>
        </div>
      </div>
      <div className="h-[1196px] bg-[#003145] flex justify-center items-center">
        <div className="w-[1172px] h-[996px]">
          <Card />
        </div>
      </div>
    </>
  );
};
export default CardsViewPage;
