import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home.jsx";
import Navbar from "./Components/Navbar.jsx";
// import SingIn from "./pages/SingIn.jsx";
// import Login from "./pages/Login.jsx";
// import Profile from "./pages/Profile.jsx";
// import MyResto from "./pages/MyResto.jsx";
// import AddResto from "./pages/AddResto.jsx";
// import RestoAddMenu from "./pages/RestoAddMenu.jsx";
// import OrderOnline from "./pages/OrderOnline.jsx";
// import MenuRes from "./pages/MenuRes.jsx";

const Home = React.lazy(() => import("./pages/Home.jsx"));
const SingIn = React.lazy(() => import("./pages/SingIn.jsx"));
const Login = React.lazy(() => import("./pages/Login.jsx"));
const Profile = React.lazy(() => import("./pages/Profile.jsx"));
const MyResto = React.lazy(() => import("./pages/MyResto.jsx"));
const AddResto = React.lazy(() => import("./pages/AddResto.jsx"));
const RestoAddMenu = React.lazy(() => import("./pages/RestoAddMenu.jsx"));
const OrderOnline = React.lazy(() => import("./pages/OrderOnline.jsx"));
const MenuRes = React.lazy(() => import("./pages/MenuRes.jsx"));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signIn" element={<SingIn />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/addResto" element={<MyResto />} />
          <Route path="/addResto/restoAdd" element={<AddResto />} />
          <Route path="/profile/:restoId" element={<RestoAddMenu />} />
          <Route path="/restaurant/order-online" element={<OrderOnline />} />
          <Route
            path="/restaurant/order-online/:name/:_id"
            element={<MenuRes />}
          />
        </Routes>
      </Suspense>
      <Navbar />
    </Router>
  );
}

export default App;
