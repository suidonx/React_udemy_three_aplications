import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { CreatePost } from "./components/CreatePost";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Logout } from "./components/Logout";
import { Router } from "./router/Routes";

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
