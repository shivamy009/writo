import React, { useState } from "react";
 
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import loginIcons from '../Asset/signin.gif'
 


const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [confirmshowPassword, setConfirmshowPassword] = useState(false);
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
    profilePic: "",
  });


 

  const handlechange = (e) => {
    // e.preventDefault()
    const { name, value } = e.target;

    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
 
  return (
    <section id="login" className=" min-h-screen">
      {/* <ToastContainer /> */}
      <div className="mx-auto container p-4">
        <div className="bg-white p-5 w-full max-w-sm mx-auto">
          <div className="w-20 h-20 mx-auto relative overflow-hidden rounded-full">
            <div>
            <img src={data.profilePic || loginIcons} alt='login icons'/>
            </div>
            <form>
              <label>
                <div className="text-xs bg-opacity-80 bg-slate-200 pb-4 pt-2 cursor-pointer text-center absolute bottom-0 w-full">
                  Upload Photo
                </div>
                <input
                  type="file"
                  className="hidden"
                  // onChange={handleUploadPic}
                />
              </label>
            </form>
          </div>
          <form className="pt-6 flex flex-col gap-2">
            <div className="grid">
              <label>Name : </label>
              <div className="bg-slate-100 p-2 w-full">
                <input
                  type="text"
                  placeholder="enter name"
                  name="name"
                  className="w-full h-full outline-none bg-transparent"
                  onChange={handlechange}
                  value={data.name}
                />
              </div>
            </div>
            <div className="grid">
              <label>Email : </label>
              <div className="bg-slate-100 p-2 w-full">
                <input
                  type="email"
                  placeholder="enter email"
                  name="email"
                  className="w-full h-full outline-none bg-transparent"
                  onChange={handlechange}
                  value={data.email}
                />
              </div>
            </div>
            <div>
              <label>Password : </label>
              <div className="bg-slate-100 p-2 flex">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="enter password"
                  name="password"
                  className="w-full h-full outline-none bg-transparent"
                  onChange={handlechange}
                  value={data.password}
                />
                <div
                  className="cursor-pointer text-xl"
                  onClick={() => setShowPassword((preve) => !preve)}
                >
                  <span>{showPassword ? <FaEyeSlash /> : <FaEye />}</span>
                </div>
              </div>
              <label>Confirm Password : </label>
              <div className="bg-slate-100 p-2 flex">
                <input
                  type={confirmshowPassword ? "text" : "password"}
                  placeholder="enter confirm password"
                  name="confirmpassword"
                  className="w-full h-full outline-none bg-transparent"
                  onChange={handlechange}
                  value={data.confirmpassword}
                />
                <div
                  className="cursor-pointer text-xl"
                  onClick={() => setConfirmshowPassword((preve) => !preve)}
                >
                  <span>
                    {confirmshowPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
              </div>
              <Link
                to={"/forgot-password"}
                className="block w-fit ml-auto hover:underline hover:text-red-600"
              >
                Forgot password ?
              </Link>
            </div>

            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-6">
              SignUp
            </button>
          </form>
          <p className="my-5">
            Already have account ?{" "}
            <Link
              to={"/login"}
              className=" text-red-600 hover:text-red-700 hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Signup;
