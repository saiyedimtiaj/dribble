import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer"
import { MdOutgoingMail } from "react-icons/md";
import useAuth from "../../Hooks/useAuth";
import { Link } from "react-router-dom";

const Sucess = () => {
  const {user} = useAuth()
  return (
    <div>
      <Navbar />
      <div className="py-20 min-h-[calc(100vh-636px)] container mx-auto px-2">
        <div className="text-center flex gap-y-3 flex-col items-center text-gray-500">
          <h1 className="text-2xl lg:text-3xl font-bold text-black">Please verify your email...</h1>
          <span><MdOutgoingMail className="text-9xl" /></span>
          <p>Please verify your email address.We've sent a confirmation email to:</p>
          <h1 className="font-semibold text-xl text-black">{user?.email}</h1>
          <p>Click the confirmation link in that email to begin using Dribble.</p>
          <p className="max-w-[620px]">Didn't receive the email? Check your Spam folder,it may have been caught by a filter,if you still don't see it,you can <span className="font-semibold">resend confirmation email</span></p>
          <p>Wrong email address? <span className="font-semibold"><Link to='/signup'>Change it.</Link></span></p>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Sucess;
