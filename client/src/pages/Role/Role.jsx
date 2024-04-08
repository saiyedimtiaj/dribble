import React, { useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import logo from "../../assets/6303a59fab1b900654aad3c6.png";
import png1 from "../../assets/1.png";
import png2 from "../../assets/2.png";
import png3 from "../../assets/3.png";
import { FaCheck } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import useAxios from "../../Hooks/useAxios";
import useAuth from "../../Hooks/useAuth";

const Role = () => {
  const navigate = useNavigate();
  const [option, setOption] = useState("");
  const axios = useAxios();
  const { user } = useAuth();
  const data = [
    {
      id: 1,
      heading: "I'm a designer looking to share my work",
      title:
        "Unleash Your Creative Vision: A Platform for Designers to Showcase Their Talent and Inspire Others",
      image: png1,
    },
    {
      id: 2,
      heading: "I'm  looking to hire a designer",
      title:
        "With over 7 million shots from a vest community of designers.Dribble is the leading source for design inspiration",
      image: png3,
    },
    {
      id: 3,
      heading: "I'm  looking for designer inspiration",
      title:
        "Unlock Design Excellence: Connect with Skilled Designers Ready to Bring Your Ideas to Life",
      image: png2,
    },
  ];

  const handleAccount = async () => {
    axios.patch(`/users/${user?.email}`, { role: option }).then((res) => {
      if (res.data?.modifiedCount > 0) {
        navigate("/success");
        axios.get(`/email?email=${user?.email}`).then((res) => {
          console.log(res.data);
        });
      }
    });
  };

  return (
    <div className="max-w-[1020px] pb-14 mx-auto px-3">
      <div className="flex items-center py-3 gap-2">
        <img src={logo} className="h-14 p-3" alt="" />
        <span
          onClick={() => navigate("/profile")}
          className="bg-[#d7d5d5] p-3 rounded-md cursor-pointer"
        >
          <FaChevronLeft />
        </span>
      </div>
      <div className="text-center mt-5 mb-9">
        <h1 className="text-3xl font-bold">What brings you to Dribble?</h1>
        <p>
          Select the option that best describe you.Don't worry, you can explore
          other options later.
        </p>
      </div>
      <div className="grid md:grid-cols-2 mb-10 grid-cols-1 lg:grid-cols-3 mt-20 lg:gap-7 gap-20">
        {data?.map((data) => (
          <div
            key={data?.id}
            onClick={() => setOption(data?.heading)}
            className={`cursor-pointer relative flex gap-y-3 p-6 rounded-lg border-2 flex-col items-center justify-center ${
              option === data?.heading && "border-black"
            }`}
          >
            <img
              src={data?.image}
              className={`w-48 ${
                option === data?.heading ? "absolute -top-14" : "designer"
              }`}
              alt=""
            />
            <h4
              className={`text-2xl font-semibold text-center ${
                option === data?.heading ? "mt-3" : ""
              }`}
            >
              {data?.heading}
            </h4>
            {option === data?.heading && (
              <p className="text-center">{data?.title}</p>
            )}
            {option === data?.heading ? (
              <span className="bg-[#ED4C8A] p-2 text-white rounded-full">
                <FaCheck />
              </span>
            ) : (
              <span className="w-8 h-8 rounded-full border-2"></span>
            )}
          </div>
        ))}
      </div>
      <div className="flex items-center flex-col justify-center gap-7 text-center">
        {option === "" || (
          <h1 className="text-xl font-bold">
            Anything else? you can select multiple
          </h1>
        )}
        <button
          className={`px-8 py-1.5 font-medium rounded ${
            option === ""
              ? "bg-[#F8B8D0] text-[#FFFDFF]"
              : "text-white bg-[#EA4B8A]"
          }`}
          disabled={option === ""}
          onClick={handleAccount}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Role;
