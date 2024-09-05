import React from "react";
import RocketIcon from "./assets/rocketIcon.svg";
import AiIcon from "./assets/aiIcon.svg";
import userIcon from "./assets/50kIcon.svg";
import radioIcon from "./assets/aiChallengeIcon.svg";
import CardsViewPage from "./CardsViewPage";
import p1 from "./assets/p1.svg";
import p2 from "./assets/p2.svg";
import p3 from "./assets/p3.svg";
import p4 from "./assets/p4.svg";
import { useNavigate } from "react-router-dom";
const HeroPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-[#003145] h-[635px] w-[100%] flex flex-wrap">
        <div className="h-[262px] w-[643px] bg-[#003145] absolute top-[188px] left-[143px]">
          <h2 className="font-semibold leading-[56px] text-white text-5xl text-left">
            Accelerate Innovation<br></br>with Global AI Challenges
          </h2>
          <p className="text-left text-white mt-2">
            AI Challenges at DPhi simulate real-world problems. It is a great
            place to put your AI/Data Science skills to test on diverse datasets
            allowing you to foster learning through competitions{" "}
          </p>
          <button
            onClick={() => navigate("/admin")}
            className="bg-white rounded-lg h-[47px] w-[198px] mt-[40px]"
          >
            Create Challenge
          </button>
        </div>
        <div className="w-1 h-[105px] bg-[yellow] absolute top-[190px] left-[100px]"></div>
        <div className="absolute top-[170px] left-[1050.34px]">
          <img src={RocketIcon} alt="" />
        </div>
      </div>
      <div className="bg-[#002A3B] h-[200px] flex justify-center items-center">
        <div className="flex  h-[55px] w-[1075px]  justify-between">
          <div className="iconGroup  w-[33%] flex">
            <img
              className="h-[55px] w-[49px] mt-[-2px] mr-6"
              src={AiIcon}
              alt=""
            />
            <span>
              <h2 className="text-white">100K+</h2>
              <p className="text-white">AI model submission</p>
            </span>
          </div>
          <div className="iconGroup  pl-[30px] w-[33%] flex">
            <img
              className="h-[55px] w-[49px] mt-[-2px] mr-6"
              src={userIcon}
              alt=""
            />
            <span>
              <h2 className="text-white">50K+</h2>
              <p className="text-white">Data Scientists</p>
            </span>
          </div>
          <div className="iconGroup pl-[132px] w-[33%]  flex">
            <img
              className="h-[55px] w-[49px] mt-[-2px] mr-6"
              src={radioIcon}
              alt=""
            />
            <span>
              <h2 className="text-white">100K+</h2>
              <p className="text-white">AI Challenge hosted</p>
            </span>
          </div>
        </div>
      </div>
      <div className="h-[902px] flex flex-col justify-center items-center">
        <h1 className="font-bold text-[32px] mb-[70px]">
          Why Participate in{" "}
          <span className="text-green-700 text-[32px]">AI Challenges?</span>
        </h1>
        <div className="w-[1130px] h-[593px] flex flex-wrap justify-center items-center mt[70px]">
          <div className="w-[542px] h-[276px]  m-2 p-[10px]">
            <img src={p1} alt="" />
            <h2 className="font-semibold text-2xl">Prove your skills</h2>
            <p>
              Gain substantial experience by solving real-world probles and pit
              against others to come up with innovative solutions
            </p>
          </div>
          <div className="w-[542px] h-[276px]  m-2 p-[10px]">
            <img src={p2} alt="" />
            <h2 className="font-semibold text-2xl">Learn from community</h2>
            <p>
              One can look and analyze the solutions submitted by the other Data
              Scientists in the community and learn from them.
            </p>
          </div>
          <div className="w-[542px] h-[276px]  m-2 p-[10px]">
            <img src={p3} alt="" />
            <h2 className="font-semibold text-2xl">Challenge yourself</h2>
            <p>
              There is nothing for you to lose by participating in a challenge.
              You can fail safe, learn out of the entire experience and bounce
              back harder.
            </p>
          </div>
          <div className="w-[542px] h-[276px] m-2 p-[10px]">
            <img src={p4} alt="" />
            <h2 className="font-semibold text-2xl">Earn recognition</h2>
            <p>
              You will stand out from the crowd if you do well in AI challenges,
              it not only helps you shine in the community but also earns
              rewards.
            </p>
          </div>
        </div>
      </div>
      <CardsViewPage />
    </>
  );
};

export default HeroPage;
