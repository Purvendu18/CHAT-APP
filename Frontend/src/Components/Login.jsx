/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import axios from "axios";
import { useAuth } from "../context/AutProvider";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";


export default function Login(){
  const[authUser, setAuthUser] = useAuth();

  const { register, 
    handleSubmit, 
    // watch,
    formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
        name: data.Username,
        email: data.email,
        password: data.password,
        confirmpassword: data.confirmPassword,
        };   
        await axios
        .post("/api/user/login", userInfo)
        .then((response) => {
          if (response.data) {
            toast.success("Login successful");
          }
          localStorage.setItem("CHAT-APP", JSON.stringify(response.data)); 
          console.log(response.data)  
          setAuthUser(response.data);       
        })
            .catch((error) => {
              if(error.response)
                toast.error("ERROR: ", error.response.data.messages);
            });
    };


  
    return(
        <>
       <div className="flex h-screen items-center justify-center">
        <form onSubmit={handleSubmit(onSubmit)}
        className="border border-slate-400 rounded-md px-8 py-3 space-y-2">
            <h1 className="text-2xl item centre text-slate-200 font-bold">
                Chat-App
            </h1>
            <h1 className="text-3xl items-center">
                Login with your account
            </h1>
            <h2>
                Its free and always be
            </h2>
{/* <br></br> */}
            {/* <div> */}

                {/* Email */}
            <label className="input input-bordered flex items-center gap-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
    <path
      d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
  </svg>
  <input type="text" className="grow" placeholder="Email"  {...register("email", { required: true })}
            />
            </label>
            {errors.email && <span className="text-red-600 text-sm ">*This field is required</span>}

{/* Password */}
<label className="input input-bordered flex items-center gap-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      fillRule="evenodd"
      d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
      clipRule="evenodd" />
  </svg>
  <input type="password" className="grow" placeholder="password" {...register("password", { required: true })}
            />
            
          </label>
          {errors.password && <span className="text-red-600 text-sm ">*This field is required</span>}


{/* text and buttons */}
<div>
<input className="h-8 text-white font-semibold cursor-pointer bg-blue-500 w-full rounded-md" type="submit" value= "Login" ></input>
<p>Dont have an account ? <Link to = {"/signup"} className="text-blue-500 font-semibold underline cursor-pointer">Signup</Link> </p>

            </div>
        </form>
        
        
        
        </div>
        
        </>
    )
}