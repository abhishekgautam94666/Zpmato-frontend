import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./Components/Navbar.jsx";
import Success from "./pages/Success.jsx";
import Cancel from "./pages/Cancel.jsx";
import { useSelector } from "react-redux";

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
  const { currentUser } = useSelector((state) => state.user);

  //const navigate = useNavigate();
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signIn" element={<SingIn />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/profile"
            element={currentUser ? <Profile /> : <Navigate to={"/login"} />}
          />
          <Route path="/addResto" element={<MyResto />} />
          <Route path="/addResto/restoAdd" element={<AddResto />} />
          <Route path="/profile/:restoId" element={<RestoAddMenu />} />
          <Route path="/restaurant/order-online" element={<OrderOnline />} />
          <Route
            path="/restaurant/order-online/:name/:_id"
            element={<MenuRes />}
          />
          <Route path="/success" element={<Success />} />
          <Route path="/cancel" element={<Cancel />} />
        </Routes>
      </Suspense>
      <Navbar />
    </Router>
  );
}

export default App;
