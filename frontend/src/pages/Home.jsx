import React from "react";
import HomeVideo from "../assets/img/HomeVideo.gif";
import GroupStudy from "../assets/img/groupstudy.gif";
import DoubtSolving from "../assets/img/doubt_solving.gif";
import Community from "../assets/img/community.gif";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate()
  return (
    <div className="p-7 overscroll-none">
      <div className="">
        <h1 className="text-center text-3xl">WELCOME TO STUDY BUDDY</h1>
      </div>
      <div className=" flex justify-center">
        <img src={HomeVideo} width={"400px"} height={"300px"} alt="" />
      </div>
      <div className="text-center text-2xl font-semibold pb-8">
        We are a team of students with an amazing and easy solution for your
        hectic problems related to studies. Come join us and get to learn from
        people holding more experience. Having trouble connecting with people?
        We are here to help! Connect with your college peers having similar
        interests and dive into the sea of knowledge with your Study Buddy!
      </div>
      <div className="flex justify-center">
      <div className="text-center border bg-gray-500 w-[72px] h-9 rounded-md p-1">
        <button
          onClick={() => {
            navigate("signup");
          }}
        >
          Sign Up
        </button>
      </div>
          </div>
      <div className=" pt-8 text-center text-3xl font-bold">
        <h1>What’s here for you?</h1>
      </div>

      <div className=" pt-3 flex justify-between">
        <div>
          <img src={GroupStudy} width={"400px"} height={"300px"} alt="" />
        </div>
        <div>
          <h1 className="text-3xl text-center font-bold ">GROUP STUDY</h1>
          <h5 className="font-bold pt-6 pl-8">
            Indulge in group study by finding perfect study mates for you.
            Studying for exams made easier and interesting.
          </h5>
        </div>
      </div>

      <div className="flex justify-between ">
        <div>
          <h1 className="text-3xl text-center font-bold">
            REAL-TIME-DOUBT SOLVING
          </h1>
          <h5 className=" font-bold pt-6 ">
            Stuck in a doubt and using chat GPT, Google, or nothing solved the
            problem. Want someone to explain you the problem. You can choose
            students from your college who are expert in that domain to explain
            you the doubt in person or on call.
          </h5>
        </div>
        <div className="pr-8">
          <img src={DoubtSolving} width={"400px"} height={"300px"} alt="" />
        </div>
      </div>

      <div className="flex justify-between-">
        <div className="">
          <img src={Community} width={"400px"} height={"300px"} alt="" />
        </div>
        <div className="">
          <h1 className="text-3xl text-center font-bold">FIND A COMMUNITY</h1>
          <h5>
            Connect with people having similar interests in your college. If you
            are an introvert or could not be a part of any club, we bring to you
            our FIND A COMMUNITY feature to connect with people in your college,
            read with them and learn from their experiences.
          </h5>
        </div>
      </div>

      <div className="text-center text-3xl pb-8">
        <h3>
          SO, WHAT ARE YOU WAITING FOR? YOU ARE JUST ONE CLICK AWAY FROM THE
          BEST LEARNING EXPERIENCE.
        </h3>
      </div>
      <div className="flex justify-center">
        <div className="rounded-md text-center border bg-gray-500 w-[72px] h-8 p-1">
          <button
            onClick={() => {
              navigate("signup");
            }}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
