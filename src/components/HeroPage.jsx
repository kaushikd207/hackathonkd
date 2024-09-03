import React from "react";
import RocketIcon from "./assets/rocketIcon.svg";
import AiIcon from "./assets/aiIcon.svg";
import CardsViewPage from "./CardsViewPage"
const HeroPage = () => {
  return (
    <>
      <div className="bg-[#003145] h-[635px] w-[100%] flex flex-wrap">
        <div className="h-[262px] w-[643px] border-2 border-red-400bg-[#003145] absolute top-[188px] left-[143px]">
          <h2 className="font-semibold leading-[56px] text-white text-5xl text-left">
            Accelerate Innovation<br></br>with Global AI Challenges
          </h2>
          <p className="text-left text-white mt-2">
            AI Challenges at DPhi simulate real-world problems. It is a great
            place to put your AI/Data Science skills to test on diverse datasets
            allowing you to foster learning through competitions{" "}
          </p>
        </div>
        <div className="w-1 h-[105px] bg-[yellow] absolute top-[190px] left-[100px]"></div>
        <div className="absolute top-[170px] left-[1050.34px]">
          <img src={RocketIcon} alt="" />
        </div>
      </div>
      <div className="bg-[#002A3B] h-[200px] flex justify-center items-center">
        <div className="flex  h-[55px] w-[1075px] border-red-400 border-2 justify-between">
          <div className="iconGroup border-2 w-[100%] border-white">
            <img className="h-[55px] w-[55px]" src={AiIcon} alt="" />
            <span>
              <h2 className="text-white">100K+</h2>
              <p className="text-white">AI model submission</p>
            </span>
          </div>
          <div className="iconGroup border-2w-[100%] border-white"></div>
          <div className="iconGroup border-2 w-[100%] border-white"></div>
        </div>
      </div>
      <CardsViewPage />
    </>
  );
};

export default HeroPage;
