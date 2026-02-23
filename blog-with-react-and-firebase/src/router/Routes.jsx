import { Route, Routes } from "react-router-dom";
import { Home } from "../components/Home";
import { CreatePost } from "../components/CreatePost";
import { Login } from "../components/Login";
import { Logout } from "../components/Logout";

export const Router = () => {
  return (
    <Routes>
      <Route index path="/" element={<Home />}></Route>
      <Route path="/createpost" element={<CreatePost />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/logout" element={<Logout />}></Route>
    </Routes>
  );
};
