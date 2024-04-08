import React, { useEffect, useState } from "react";
import banner from "../../assets/Untitled11-900x613.png";
import logo from "../../assets/6303a59fab1b900654aad3c6.png";
import useAuth from "../../Hooks/useAuth";
import useAxios from "../../Hooks/useAxios";
import { BiError } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const { signup, profile } = useAuth();
  const [users, setUsers] = useState("");
  const axios = useAxios();
  const [error, setError] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const navigate = useNavigate('')

  useEffect(()=>{
    axios.get('/users')
    .then(res=>{
      setUsers(res.data)
    })
  },[])

  const handleFrom = (event) => {
    event.preventDefault();
    const from = event.target;
    const name = from.name.value;
    const userName = from.username.value;
    const email = from.email.value;
    const password = from.password.value;

    const body = {
      name,
      userName,
      email,
      image: "",
      role: "",
      location: "",
    };

    const userExist = users.find((user)=>user.userName === userName)
    if(userExist){
      return setError('Username has already been taken')
    }

    signup(email, password)
      .then(() => {
        profile(userName).then(() => {
          axios.post("/users", body).then(() => {
            navigate('/profile')
          });
        });
      })
      .catch((err) => {
        setEmailErr(err.message);
      });
  };

  return (
    <div className="flex items-start min-h-screen justify-between">
      <div className="flex gap-12 min-h-screen items-center">
        <div className="hidden lg:flex flex-col max-w-[350px] min-h-screen bg-[#F3D387]">
          <img className="w-20 mt-5 ml-3" src={logo} alt="" />
          <h1 className="text-2xl ml-3 mt-5 mb-8 text-[#866216] font-bold">
            Discover the world's top <br /> Designers & Creatives
          </h1>
          <img src={banner} alt="" />
          <p className="text-[#866216] font-semibold ml-3 mt-10">
            Art by <span className="cursor-pointer underline">Peter Tarka</span>
          </p>
        </div>
        <div className="mb-8 lg:max-w-[450px] px-3">
          <div className="lg:hidden">
            <p className="text-right pr-2 mt-1">
              Already a member?{" "}
              <span className="text-blue-700 cursor-pointer hover:underline">
                Sign Up
              </span>
            </p>
          </div>
          <h1 className="text-2xl mt-8 font-bold">Sign up to Dribble</h1>
          <p className="text-[#D9766F] py-2">{emailErr || error}</p>
          <form onSubmit={handleFrom} className="space-y-4 mt-3">
            <div className="flex gap-2 w-full items-center">
              <div className="w-full">
                <p className="font-semibold">Name</p>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Name"
                  className="px-4 w-full mt-1 py-1.5 bg-[#F3F3F3] rounded-md"
                />
              </div>
              <div className="w-full">
              <div className="flex items-center">
                {
                  error && <span className="text-[#FC5253] pr-2">
                  <BiError />
                </span>
                }
                <p className="font-semibold">Username</p>
              </div>
                <input
                  type="text"
                  required
                  name="username"
                  placeholder="username"
                  className="px-4 mt-1 w-full py-1.5 bg-[#F3F3F3] rounded-md"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center">
                {
                  emailErr && <span className="text-[#FC5253] pr-2">
                  <BiError />
                </span>
                }
                <p className="font-semibold">Email</p>
              </div>
              <input
                type="email"
                required
                name="email"
                placeholder="Your Email"
                className="px-4 w-full mt-1 py-1.5 bg-[#F3F3F3] rounded-md"
              />
            </div>
            <div>
              <p className="font-semibold">Password</p>
              <input
                type="password"
                required
                name="password"
                placeholder="6+ charecters"
                className="px-4 w-full mt-1 py-1.5 bg-[#F3F3F3] rounded-md"
              />
            </div>
            <div className="flex gap-2 items-start">
              <div>
                <input required type="checkbox" />
              </div>
              <p>
                Creating an account means you're okey with our{" "}
                <span className="text-indigo-700">
                  Terms of Service,Privacy Policy
                </span>
                , and our default{" "}
                <span className="text-indigo-700">Notification</span> Settings
              </p>
            </div>
            <input
              type="submit"
              className="bg-[#EA4B8B] text-white font-semibold cursor-pointer px-5 py-2 rounded-md"
              value="Create Account"
            />
          </form>
          <div className="text-xs mt-4">
            <p>This site is protected by reCAPTCHA and the Google</p>
            <p>
              <span className="text-indigo-700">Privacy Policy</span> and{" "}
              <span className="text-indigo-700">Terms of Service</span> apply
            </p>
          </div>
        </div>
      </div>
      <div className="hidden lg:block">
        <p className="text-right pr-2 mt-1">
          Already a member?{" "}
          <span className="text-blue-700 cursor-pointer hover:underline">
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
