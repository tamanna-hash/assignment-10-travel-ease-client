import { Link, useLocation, useNavigate } from "react-router";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import { toast } from "react-hot-toast";
import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthContext";
import { signInWithPopup } from "firebase/auth";
const SignUp = () => {
  const [show, setShow] = useState(false);
  const {
    createUserWithEmailAndPasswordFunc,
    updateProfileFunc,
    signoutUserFunc,
    setUser,
    googleProvider,
    auth,
  } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleGoogleSignUp = () => {
    signInWithPopup(auth, googleProvider)
      .then((res) => {
        toast.success("Google signup successful");
        navigate("/");
        // navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((e) => {
        toast.error(e.message || "Google signup failed!");
      });
  };
  const handleSignup = (e) => {
    e.preventDefault();
    const displayName = e.target.name?.value;
    const photoURL = e.target.photo?.value;
    const email = e.target.email?.value;
    const password = e.target.password?.value;
    const regExp = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    if (!regExp.test(password)) {
      toast.error(
        "Password must be at least 6 characters long and include at least one uppercase letter, one lowercase letter"
      );
      return;
    }

    // 1st step : Create user
    // createUserWithEmailAndPassword(auth, email, password);
    createUserWithEmailAndPasswordFunc(email, password)
      .then((res) => {
        // 2nd step: Update profile
        updateProfileFunc(displayName, photoURL)
          .then(() => {
            signoutUserFunc()
              .then(() => {
                toast.success("Signup successful.Please login Now");
                setUser(null);
                navigate("/");
              })
              // })
              .catch((e) => {
                toast.error(e.message);
              });
          })
          .catch((e) => {
            toast.error(e.message);
          });
      })
      .catch((e) => {
        if (e.code === "auth/email-already-in-use") {
          toast.error("User already exists in the database.");
        } else if (e.code === "auth/weak-password") {
          toast.error("strong password required ");
        } else if (e.code === "auth/invalid-email") {
          toast.error("Invalid email format. Please check your email.");
        } else if (e.code === "auth/user-not-found") {
          toast.error("User not found. Please sign up first.");
        } else if (e.code === "auth/wrong-password") {
          toast.error("Wrong password. Please try again.");
        } else if (e.code === "auth/user-disabled") {
          toast.error("This user account has been disabled.");
        } else if (e.code === "auth/too-many-requests") {
          toast.error("Too many attempts. Please try again later.");
        } else if (e.code === "auth/operation-not-allowed") {
          toast.error("Operation not allowed. Please contact support.");
        } else if (e.code === "auth/network-request-failed") {
          toast.error("Network error. Please check your connection.");
        } else {
          toast.error(e.message || "An unexpected error occurred.");
        }
      });
  };
  return (
    <>
      <title>TravelEase-Register</title>
      <div className="bg-[#f4f7fd] py-4 flex justify-center min-h-screen items-center">
        <div className="card bg-cyan-900/15 border border-cyan-900/30 p-6 w-full max-w-sm shrink-0 shadow-2xl py-5">
          <h2 className="font-semibold md:text-2xl text-center">
            Register your account
          </h2>
          <form onSubmit={handleSignup} className="card-body">
            <fieldset className="fieldset">
              {/* Name  */}
              <label className="label">Name</label>
              <input
                name="name"
                type="text"
                className="input"
                placeholder="Name"
                required
              />

              {/* email  */}
              <label className="label">Email</label>
              <input
                name="email"
                type="email"
                className="input"
                placeholder="Email"
                required
              />
              {/* Photo URl  */}
              <label className="label">Photo URl </label>
              <input
                name="photo"
                type="text"
                className="input"
                placeholder="Photo URl"
                required
              />

              {/* password  */}
              <div className="relative">
                <label className="label">Password</label>
                <input
                  name="password"
                  type={show ? "text" : "password"}
                  className="input"
                  placeholder="Password"
                  required
                />
                <span
                  onClick={() => setShow(!show)}
                  className="absolute right-5 top-9 cursor-pointer z-50"
                >
                  {show ? <IoEyeOff /> : <FaEye />}
                </span>
              </div>

              <button
                type="submit"
                className="btn text-xs md:text-base px-4 py-2 font-bold hover:bg-linear-to-r bg-cyan-700  hover:from-cyan-800 hover:via-cyan-700 hover:to-cyan-500 text-white mt-4 hover:scale-102"
              >
                Register
              </button>
              <button
                onClick={handleGoogleSignUp}
                className="btn text-xs md:text-base bg-white hover:scale-102 text-black border-[#e5e5e5]"
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
                Signup with Google
              </button>
              <p className="font-semibold text-center pt-5">
                Allready Have An Account ?{" "}
                <Link className="text-secondary underline" to="/auth/login">
                  Login
                </Link>
              </p>
            </fieldset>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
