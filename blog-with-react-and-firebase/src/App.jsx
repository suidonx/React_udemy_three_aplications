import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { CreatePost } from "./components/CreatePost";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Logout } from "./components/Logout";
import { Router } from "./router/Routes";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Router />
    </BrowserRouter>
  );
}

export default App;
