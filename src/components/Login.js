import React, { useRef, useState } from "react";
import Header from "./Header";
import { validateFormData } from "../utils/helpers";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [formErrorMessage, setFormErrorMessage] = useState(true);
  const toggleForm = () => setIsSignInForm(!isSignInForm);
  const navigate = useNavigate();

  const email = useRef(null);
  const password = useRef(null);

  const onHandleSubmit = () => {
    const userEmail = email.current.value,
      userPassword = password.current.value;
    const result = validateFormData(userEmail, userPassword);
    setFormErrorMessage(result);

    if (result) return;

    if (!isSignInForm) {
      createUserWithEmailAndPassword(auth, userEmail, userPassword)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: "Saikumar Bolisetti",
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              console.log("Sign-up user: ", user);
              navigate("/browse");
            })
            .catch((error) => {
              setFormErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log("Sign-up Error: ", errorCode + " - " + errorMessage);
          setFormErrorMessage(errorCode + " - " + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(auth, userEmail, userPassword)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log("Sign-in user: ", user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log("Sign-in Error: ", errorCode + " - " + errorMessage);
          setFormErrorMessage(errorCode + " - " + errorMessage);
        });
    }
  };
  return (
    <div className="bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/0552717c-9d8c-47bd-9640-4f4efa2de663/537e2c5e-c750-4d4c-9f7a-e66fe93eb977/IN-en-20240701-POP_SIGNUP_TWO_WEEKS-perspective_WEB_b00eeb83-a7e8-4b5b-8ff7-86ed92c51caf_small.jpg')] w-full h-full flex flex-col items-center">
      <Header />

      <form
        className="w-3/12 p-12 bg-black my-auto mx-auto right-0 left-0 text-white rounded-xl bg-opacity-70"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="font-bold text-2xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Fullname"
            className="p-4 my-4 w-full bg-gray-700 rounded-xl"
          />
        )}
        <input
          type="email"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700 rounded-xl"
          ref={email}
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700 rounded-xl"
          ref={password}
        />
        <p className="font-bold text-xs text-red-600">{formErrorMessage}</p>
        <button
          className="p-4 my-6 bg-red-600 w-full rounded-xl"
          onClick={onHandleSubmit}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-bold cursor-pointer" onClick={toggleForm}>
          {isSignInForm
            ? "New to Netflix, Sign Up now"
            : "Already registered? Sign In now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
