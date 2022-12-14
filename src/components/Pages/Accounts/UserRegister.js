import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import { AuthContext } from "../../../contexts/AuthProvider";
import useToken from "../../../Hooks/useToken";

const UserRegister = () => {
  const { userRegister, userProfileUpdate, googleSignIn } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [token] = useToken(email);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token, navigate]);

  const { register, handleSubmit } = useForm();
  const handleRegister = (data) => {
    const name = data.name;
    const email = data.email;
    const password = data.password;
    setLoading(true);

    const userDetails = {
      name: data.name,
      email: data.email,
      role: "buyer",
    };

    userRegister(email, password)
      .then((result) => {
        toast.success("User account created");
        userProfileUpdate({ displayName: name })
          .then((result) => {
            toast.success(`Wellcome ${data.name}`);
            fetch("https://lozzeby-server-side.vercel.app/buyers", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(userDetails),
            })
              .then((res) => res.json())
              .then((data) => {
                setEmail(email);
              });
          })
          .catch((error) => {
            setLoading(false);
          });
      })
      .catch((error) => toast.error("Account creation failed"));
  };

  const handleGoogle = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
        const userDetails = {
          name: user.displayName,
          email: user.email,
          role: "buyer",
        };
        fetch(`https://lozzeby-server-side.vercel.app/buyers/${user?.email}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userDetails),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.success) {
              verifySocialLogin(userDetails.email);
              navigate("/");
            }
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const verifySocialLogin = (email) => {
    fetch(`https://lozzeby-server-side.vercel.app/check-user-email/${email}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          fetch(`https://lozzeby-server-side.vercel.app/jwt?email=${email}`)
            .then((res) => res.json())
            .then((data) => {
              if (data.accessToken) {
                localStorage.setItem("AccessToken", data.accessToken);
              }
            });
        }
      });
  };
  return (
    <div>
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <BeatLoader color="#36d7b7" />
        </div>
      ) : (
        <section className="bg-white dark:bg-gray-900">
          <div className="container flex items-center justify-center flex-col min-h-screen px-6 mx-auto">
            <form
              onSubmit={handleSubmit(handleRegister)}
              className="w-full max-w-md"
            >
              <h1 className="text-3xl font-semibold text-gray-800  dark:text-white">
                Register as a User
              </h1>

              <div className="relative flex items-center mt-8">
                <span className="absolute">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                    />
                  </svg>
                </span>

                <input
                  type="text"
                  className="block w-full py-3 text-gray-700 bg-white border rounded-md px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Your name"
                  {...register("name")}
                />
              </div>
              <div className="relative flex items-center mt-4">
                <span className="absolute">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </span>

                <input
                  type="email"
                  className="block w-full py-3 text-gray-700 bg-white border rounded-md px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Email address"
                  {...register("email")}
                />
              </div>

              <div className="relative flex items-center mt-4">
                <span className="absolute">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </span>

                <input
                  type="password"
                  className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Password"
                  {...register("password")}
                />
              </div>

              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                >
                  Register
                </button>

                <p className="mt-4 text-center text-gray-600 dark:text-gray-400">
                  Or register with
                </p>
              </div>
            </form>
            <div>
              <button
                onClick={handleGoogle}
                className="flex w-full items-center justify-center px-6 py-3 mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <svg className="w-6 h-6 mx-2" viewBox="0 0 40 40">
                  <path
                    d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                    fill="#FFC107"
                  />
                  <path
                    d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                    fill="#FF3D00"
                  />
                  <path
                    d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                    fill="#4CAF50"
                  />
                  <path
                    d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                    fill="#1976D2"
                  />
                </svg>

                <span className="mx-2">Continue with Google</span>
              </button>

              <div className="mt-6 text-center ">
                <Link
                  to="/users-login"
                  className="text-sm text-blue-500 hover:underline dark:text-blue-400"
                >
                  Already have an account ? Login
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default UserRegister;
