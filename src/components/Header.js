import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { toggleShowGptSearch } from "../utils/gptSlice";
import { languages } from "../utils/constants";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isUserLoggedIn = useSelector((store) => store.user);
  const showLanguageDropdownAndGPTSearch = useSelector(
    (store) => store.gpt.showGptSearch
  );

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        navigate("/");
      })
      .catch(() => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleGPTSearch = () => {
    dispatch(toggleShowGptSearch());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="bg-black px-8 py-2 w-full flex justify-between">
      <div>
        <img
          className="w-44"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="netflix-logo"
        />
      </div>
      {isUserLoggedIn && (
        <div>
          {showLanguageDropdownAndGPTSearch && (
            <select
              className="p-3 m-2 font-bold text-red-700 bg-white rounded-lg"
              onChange={handleLanguageChange}
            >
              {languages.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.value}
                </option>
              ))}
            </select>
          )}
          <button
            className="p-3 m-2 font-bold bg-red-700 text-white rounded-lg"
            onClick={handleGPTSearch}
          >
            {showLanguageDropdownAndGPTSearch ? "Home" : "GPT Search"}
          </button>
          <button
            className="p-3 m-2 font-bold text-red-700 bg-white rounded-lg"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
