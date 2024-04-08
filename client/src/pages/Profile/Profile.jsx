import React, { useEffect, useRef, useState } from "react";
import logo from "../../assets/6303a59fab1b900654aad3c6.png";
import { MdAddAPhoto } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa6";
import useAuth from "../../Hooks/useAuth";
import useAxios from "../../Hooks/useAxios";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Profile = () => {
  const [showName, setShowName] = useState({});
  const [showImagePreview, setShowImagePreview] = useState("");
  const [location, setLocation] = useState("");
  const [disabled, setDisabled] = useState(true);
  const fileInputRef = useRef();
  const { profile,user } = useAuth();
  const axiosIns = useAxios();
  const navigate = useNavigate()

  useEffect(() => {
    if (showImagePreview.length > 0 && location.length > 0) {
      setDisabled(false);
    }else{
      setDisabled(true)
    }
  }, [location, showName]);

  const handleSubmit = () => {
    const image = showName
    const data = new FormData()
    data.append("file",image)
    data.append("upload_preset","teasting01")
    data.append("cloud_name","ddhb3f9rg")
    axios.post("https://api.cloudinary.com/v1_1/ddhb3f9rg/image/upload",data)
    .then(data=>{
      profile(user?.displayName,data.url)
      .then(()=>{
        const body = {
          image: data?.url,
          location : location
        }
        axiosIns.patch(`/users/${user?.email}`,body)
        .then((res)=>{
          if(res.data?.modifiedCount > 0){
            navigate('/role')
          }
        })
      })
    })
    .catch(err=>{
      console.log(err);
    })
  }

  return (
    <div className="pb-10 container mx-auto">
      <img src={logo} className="h-14 p-3" alt="" />
      <div className="mx-auto px-3 space-y-4 max-w-[500px]">
        <h1 className="text-3xl font-bold">
          Welcome Let's Create your Profile
        </h1>
        <p className="text-[#9F9DA4]">
          Let others get to know you batter! You can do these later
        </p>
        <div>
          <h3 className="text-xl font-bold">Add an Avater</h3>
          <div className="flex flex-col mt-4 md:flex-row gap-7 items-center">
            <div>
              {showName?.name ? (
                <div className=" ">
                  <img
                    className="w-[140px] h-[140px] rounded-full object-cover"
                    src={showImagePreview}
                    alt={showName?.name}
                  />
                </div>
              ) : (
                <label
                  className="flex w-[150px] h-[150px] flex-col items-center justify-center rounded-full border-2 border-dashed border-gray-400 p-6"
                  htmlFor="file5"
                >
                  <MdAddAPhoto size={26} />
                </label>
              )}

              <input
                ref={fileInputRef}
                onChange={(e) => {
                  if (e.target.files && e.target.files[0]) {
                    const imageFile = e.target.files[0];
                    setShowName(imageFile);
                    setShowImagePreview(URL.createObjectURL(imageFile));
                  }
                }}
                className="hidden"
                id="file5"
                type="file"
              />
            </div>
            <div>
              <div className="flex mb-3">
                <label className="" htmlFor="file">
                  <p className="border-2 px-5 font-semibold py-1.5 rounded-md">
                    {" "}
                    Choose Images
                  </p>
                </label>
                <input
                  onChange={(e) => {
                    e.target.files && e.target.files[0];
                    const imageFile = e.target.files[0];
                    setShowName(imageFile);
                    setShowImagePreview(URL.createObjectURL(imageFile));
                  }}
                  className="hidden"
                  id="file"
                  type="file"
                />
              </div>
              <div className="flex text-gray-500 items-center gap-1">
                <span>
                  <FaAngleRight />
                </span>
                <span>Or choose one of our defaults</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <h3 className="text-xl font-bold mb-1">Add your location</h3>
          <input
            onChange={(e) => setLocation(e.target.value)}
            type="text"
            placeholder="Enter a location"
            className="w-full py-1.5 border-b-2 border-black focus:outline-none"
          />
        </div>
        <button className={`px-8 py-1.5 font-medium rounded ${disabled ? 'bg-[#F8B8D0] text-[#FFFDFF]' : 'text-white bg-[#EA4B8A]'}`} onClick={handleSubmit} disabled={disabled}>Next</button>
      </div>
    </div>
  );
};

export default Profile;
