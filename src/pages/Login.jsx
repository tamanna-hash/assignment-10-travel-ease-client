// import React, { useContext, useRef, useState } from "react";
// import { Link, Navigate, useLocation, useNavigate } from "react-router";
// import { FaEye } from "react-icons/fa";
// import { IoEyeOff } from "react-icons/io5";
// import { toast } from "react-hot-toast";
// import { AuthContext } from "../provider/AuthContext";

// const Login = () => {
//   const [show, setShow] = useState(false);
//   const {
//     signInWithEmailAndPasswordFunc,
//     signInWithEmailFunc,
//     setLoading,
//     setUser,
//   } = useContext(AuthContext);
//   const location = useLocation();
//   const from = location.state || "/";
//   // const from = location.state?.from?.pathname || "/";
//   const navigate = useNavigate();
//   const emailRef = useRef(null);

//   const handleSignin = (e) => {
//     e.preventDefault();
//     const email = e.target.email?.value;
//     const password = e.target.password?.value;
//     signInWithEmailAndPasswordFunc(email, password)
//       .then((res) => {
//         setLoading(false);
//         setUser(res.user);
//         toast.success("Login successfully");
//         // console.log(from);
//         navigate(from);
//         // navigate(`${location.state ? location.state : "/"}`);
//       })
//       .catch((e) => {
//         toast.error(e.message);
//       });
//   };

//   const handleGoogleSignin = () => {
//     signInWithEmailFunc()
//       .then((res) => {
//         setLoading(false);
//         setUser(res.user);
//         // navigate(from);
//         navigate(from);
//         toast.success("Login successfully");
//       })
//       .catch((e) => {
//         toast.error(e.message);
//       });
//   };

//   // console.log();

//   return (
//     <>
//       <title>TravelEase-Login</title>
//       <div className=" bg-[#f4f7fd] py-4 flex justify-center min-h-screen items-center">
//         <div className="card bg-cyan-900/15 border border-cyan-900/30 p-6 w-full max-w-sm shrink-0 shadow-xl">
//           <h2 className="font-semibold md:text-2xl text-center">
//             Login your account
//           </h2>
//           <form onSubmit={handleSignin} className="card-body">
//             <fieldset className="fieldset">
//               {/* email  */}
//               <label className="label">Email</label>
//               <input
//                 name="email"
//                 type="email"
//                 ref={emailRef}
//                 className="input"
//                 placeholder="Email"
//                 required
//               />
//               {/* passowrd  */}
//               <div className="relative">
//                 <label className="label">Password</label>
//                 <input
//                   name="password"
//                   type={show ? "text" : "password"}
//                   className="input"
//                   placeholder="Password"
//                   required
//                 />
//                 <span
//                   onClick={() => setShow(!show)}
//                   className="absolute right-5 top-9 cursor-pointer z-50"
//                 >
//                   {show ? <IoEyeOff /> : <FaEye />}
//                 </span>
//               </div>
//               <div>
//                 <button type="button" className="link link-hover">
//                   Forgot password?
//                 </button>
//               </div>

//               <button
//                 type="submit"
//                 className="btn text-xs md:text-base px-4 py-2 font-bold text-white hover:bg-linear-to-r bg-cyan-700  hover:from-cyan-800 hover:via-cyan-700 hover:to-cyan-500 mt-4 hover:scale-102"
//               >
//                 Login
//               </button>
//               <Link
//                 onClick={handleGoogleSignin}
//                 className="btn text-xs md:text-base bg-white hover:scale-102 text-black border-[#e5e5e5]"
//               >
//                 <svg
//                   aria-label="Google logo"
//                   width="16"
//                   height="16"
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 512 512"
//                 >
//                   <g>
//                     <path d="m0 0H512V512H0" fill="#fff"></path>
//                     <path
//                       fill="#34a853"
//                       d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
//                     ></path>
//                     <path
//                       fill="#4285f4"
//                       d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
//                     ></path>
//                     <path
//                       fill="#fbbc02"
//                       d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
//                     ></path>
//                     <path
//                       fill="#ea4335"
//                       d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
//                     ></path>
//                   </g>
//                 </svg>
//                 Login with Google
//               </Link>
//               <p className="font-semibold text-center pt-5">
//                 Dont’t Have An Account yet ?{" "}
//                 <Link className="text-secondary underline" to="/auth/register">
//                   Register
//                 </Link>
//               </p>
//             </fieldset>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Login;
import React, { useContext, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import { toast } from "react-hot-toast";
import { AuthContext } from "../provider/AuthContext";

const Login = () => {
  const [show, setShow] = useState(false);
  const {
    signInWithEmailAndPasswordFunc,
    signInWithEmailFunc,
    setLoading,
    setUser,
  } = useContext(AuthContext);

  const location = useLocation();
  const from = location.state || "/";
  const navigate = useNavigate();

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSignin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInWithEmailAndPasswordFunc(email, password)
      .then((res) => {
        setLoading(false);
        setUser(res.user);
        toast.success("Login successfully");
        navigate(from);
      })
      .catch((e) => toast.error(e.message));
  };

  const handleGoogleSignin = () => {
    signInWithEmailFunc()
      .then((res) => {
        setLoading(false);
        setUser(res.user);
        toast.success("Login successfully");
        navigate(from);
      })
      .catch((e) => toast.error(e.message));
  };

  const handleDemoLogin = () => {
    if (emailRef.current && passwordRef.current) {
      emailRef.current.value = "bala@gmail.com";
      passwordRef.current.value = "1234aA";
      toast.success("Demo credentials filled");
    }
  };

  return (
    <>
      <title>TravelEase | Login</title>

      <div className="min-h-screen flex items-center justify-center bg-[#f4f7fd] px-4">
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-2xl shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-center text-gray-800">
            Welcome Back
          </h2>
          <p className="text-sm text-center text-gray-500 mt-1">
            Login to continue to TravelEase
          </p>

          <form onSubmit={handleSignin} className="mt-6 space-y-4">
            {/* Email */}
            <div>
              <label className="label text-sm font-medium">Email</label>
              <input
                name="email"
                ref={emailRef}
                type="email"
                className="input w-full"
                placeholder="you@example.com"
                required
              />
            </div>

            {/* Password */}
            <div className="relative">
              <label className="label text-sm font-medium">Password</label>
              <input
                name="password"
                ref={passwordRef}
                type={show ? "text" : "password"}
                className="input w-full"
                placeholder="••••••••"
                required
              />
              <span
                onClick={() => setShow(!show)}
                className="absolute right-4 top-10 cursor-pointer text-gray-500"
              >
                {show ? <IoEyeOff /> : <FaEye />}
              </span>
            </div>

            <div className="flex justify-end">
              <button
                type="button"
                className="text-xs text-gray-500 hover:underline"
              >
                Forgot password?
              </button>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="btn w-full bg-cyan-700 hover:bg-cyan-800 text-white font-semibold transition"
            >
              Login
            </button>

            {/* Google Login */}
            <button
              type="button"
              onClick={handleGoogleSignin}
              className="btn w-full bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 flex items-center justify-center gap-2"
            >
              <svg
                aria-label="Google logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              Continue with Google
            </button>

            {/* Demo Login */}
            <div className="text-center pt-2">
              <button
                type="button"
                onClick={handleDemoLogin}
                className="text-xs text-cyan-700 hover:underline"
              >
                Login as demo user
              </button>
            </div>

            <p className="text-sm text-center text-gray-600 pt-4">
              Don’t have an account?{" "}
              <Link
                to="/auth/register"
                className="text-cyan-700 font-medium hover:underline"
              >
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
