import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Button from "../../components/elements/Button";
import { ToastContainer, toast } from "react-toastify";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase-config";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  let navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    const authentication = getAuth();
    let uid = "";

    await createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((response) => {
        console.log(response, 'response');
        uid = response.user.uid;
        sessionStorage.setItem("User Id", uid);
        sessionStorage.setItem(
          "Auth token",
          response._tokenResponse.refreshToken
        );
        window.dispatchEvent(new Event("storage"));
      })
      .catch((e) => {
        if (e.code === "auth/email-already-in-use") {
          toast.error("Email Already In Use");
        }
        setLoading(false);
      });

      console.log(data, 'data');
      console.log(uid, 'uid');

    await fetch("http://localhost:8080/api/create-user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: data.email,
        name: data.name,
      }),
    })
      .then((response) => {
        if (response.status === 200) {
          setLoading(false);
          toast.success("Account created successfully!🎉", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          navigate("/");
        } else {
          console.log(response.json(), 'res');
          setLoading(false);
        }
      })
      .catch((error) => {
        setLoading(false);
        console.log(error, 'err');
      });
  };

  return (
    <div className="h-screen bg-black flex items-center justify-center">
      <div className="rounded-lg max-w-md w-full flex flex-col items-center justify-center relative">
        <div className="absolute inset-0 transition duration-300 animate-pink blur gradient bg-gradient-to-tr from-rose-500 to-yellow-500"></div>
        <div className="p-10 rounded-xl z-10 w-full h-full bg-black">
          <h5 className="text-3xl">Register</h5>
          <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-lg font-medium text-gray-200"
              >
                Name
              </label>
              <input
                {...register("name")}
                id="name"
                type="text"
                className="block appearance-none w-full px-3 py-2 border border-gray-300 rondedn-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-200 focus:border-gray-200"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-lg font-medium text-gray-200"
              >
                Email
              </label>
              <input
                {...register("email")}
                id="email"
                type="email"
                className="block appearance-none w-full px-3 py-2 border border-gray-300 rondedn-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-200 focus:border-gray-200"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-lg font-medium text-gray-200"
              >
                Password
              </label>
              <input
                {...register("password")}
                id="password"
                type="password"
                className="block appearance-none w-full px-3 py-2 border border-gray-300 rondedn-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-200 focus:border-gray-200"
              />
            </div>
            <Button size="large">{loading ? "Loading..." : "Register"}</Button>
          </form>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Register;
