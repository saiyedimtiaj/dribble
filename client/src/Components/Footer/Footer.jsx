import React from "react";
import logo from "../../assets/6303a59fab1b900654aad3c6.png";
import {
  FaDribbble,
  FaTwitter,
  FaFacebookSquare,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa";
import { PiDribbbleLogoDuotone } from "react-icons/pi";

const Footer = () => {
  return (
    <div className="bg-[#f8f7f7] texxt-[#fafaf9] font-medium">
      <div className="container mx-auto px-3">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 py-16">
          <div className="space-y-4">
            <img className="h-5 md:h-8  w-auto" src={logo} alt="dribble" />
            <p>
              {" "}
              Dribble is the world's leading community for creatives to
              share,grow and get hirde
            </p>
            <div className="flex items-center gap-3">
              <span>
                <FaDribbble size={17} />
              </span>
              <span>
                <FaTwitter size={17} />
              </span>
              <span>
                <FaFacebookSquare size={17} />
              </span>
              <span>
                <FaInstagram size={17} />
              </span>
              <span>
                <FaPinterest size={17} />
              </span>
            </div>
          </div>
          <div className="space-y-4">
            <h1 className="font-bold">For designers</h1>
            <p className="cursor-pointer">Go Pro!</p>
            <p className="cursor-pointer">Explore design work</p>
            <p className="cursor-pointer">Design blog</p>
            <p className="cursor-pointer">Overtime podcust</p>
            <p className="cursor-pointer">Playoffs</p>
            <p className="cursor-pointer">Weekly Warm-Up</p>
            <p className="cursor-pointer">Refer a Friend</p>
            <p className="cursor-pointer">Code of conduct</p>
          </div>
          <div className="space-y-4">
            <h1 className="font-bold">Hire designers</h1>
            <p className="cursor-pointer">Post a job opening</p>
            <p className="cursor-pointer">Post freelance project</p>
            <p className="cursor-pointer">Search for designers</p>
            <h1 className="font-bold">Brands</h1>
            <p className="cursor-pointer">Advetise with us</p>
          </div>
          <div className="space-y-4">
            <h1 className="font-bold">Company</h1>
            <p className="cursor-pointer">About</p>
            <p className="cursor-pointer">Careers</p>
            <p className="cursor-pointer">Support</p>
            <p className="cursor-pointer">Media kit</p>
            <p className="cursor-pointer">Testimonials</p>
            <p className="cursor-pointer">API</p>
            <p className="cursor-pointer">Terms of service</p>
            <p className="cursor-pointer">Privacy policy</p>
            <p className="cursor-pointer">Cookie policy</p>
          </div>
          <div className="space-y-4">
            <h1 className="font-bold">Directories</h1>
            <p className="cursor-pointer">Design jobs</p>
            <p className="cursor-pointer">Designers of hire</p>
            <p className="cursor-pointer">Freelance designers for hire</p>
            <p className="cursor-pointer">Tags</p>
            <p className="cursor-pointer">Places</p>
            <h1 className="font-bold">Design assets</h1>
            <p className="cursor-pointer">Dribble Marketplace</p>
            <p className="cursor-pointer">Creative Market</p>
            <p className="cursor-pointer">Fontspring</p>
            <p className="cursor-pointer">Font Squirrel</p>
          </div>
          <div className="space-y-4">
            <h1 className="font-bold">Design Resources</h1>
            <p className="cursor-pointer">Freelancing</p>
            <p className="cursor-pointer">Design Hiring</p>
            <p className="cursor-pointer">Design Portfolio</p>
            <p className="cursor-pointer">Design Education</p>
            <p className="cursor-pointer">Creative Process</p>
            <p className="cursor-pointer">Design Industry Trends</p>
          </div>
        </div>
        <hr />
        <div className="flex flex-col gap-y-2 md:flex-row py-7 justify-between items-center">
            <p>© 2024 Dribbble. All rights reserved</p>
            <div className="items-center flex gap-1.5">
                <h1 className="font-bold">20,501,853</h1>
                <p>shots dribbled</p>
                <span><PiDribbbleLogoDuotone size={21} /></span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
