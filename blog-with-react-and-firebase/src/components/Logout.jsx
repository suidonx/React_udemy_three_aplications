import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { LoginUserContext } from "../providers/LoginUserProvider";

export const Logout = () => {
  const { isAuth, setIsAuth } = useContext(LoginUserContext);
  const navigate = useNavigate();
  const logout = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      navigate("/login");
    });
  };
  return (
    <>
      <div>
        <p>ログアウトする</p>
        <button onClick={logout}>ログアウト</button>
      </div>
    </>
  );
};
