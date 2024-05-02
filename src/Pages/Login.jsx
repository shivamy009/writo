import React, { useState } from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
  




const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [data,setData]= useState({
    email:"",
    password:""
  })
   

  const handlechange =(e)=>{
    e.preventDefault()
    const {name ,value}=e.target

    setData((prev)=>{
        return{
            ...prev,
            [name]:value
        }
    })

  }

 
  return (
    <section id="login" className=" min-h-screen">
      <div className="mx-auto container p-4">
        <div className="bg-white p-5 w-full max-w-sm mx-auto">
          <div className="w-20 h-20 mx-auto">
            <FaRegCircleUser className=" text-5xl text-red-600" />
          </div>
          <form className="pt-6 flex flex-col gap-2">
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
              <Link
                // to={"/forgot-password"}
                to={"#"}
                className="block w-fit ml-auto hover:underline hover:text-red-600"
              >
                Forgot password ?
              </Link>
            </div>

            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-6">
              Login
            </button>
          </form>
           <p className='my-5'>Don't have account ? <Link to={"/sign-up"} className=' text-red-600 hover:text-red-700 hover:underline'>Sign up</Link></p>
        </div>
      </div>
    </section>
  );
};

export default Login;
