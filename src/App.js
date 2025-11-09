import { Route, Routes } from "react-router-dom";
import Login from "./pages/Loginpage";
import Register from "./pages/Registerpage";
import Profile from "./pages/Profilepage";
import Product from "./pages/Productpage";
import ProtectedRoutes from "./components/ProtectedRoutes";





function App() {
  return (
    <div >

      <Routes>
        <Route path="/" element={<Login></Login>} ></Route>
        <Route path="/register" element={<Register></Register>} ></Route>
        <Route path="/profile" element={
          <ProtectedRoutes>
            <Profile></Profile>
          </ProtectedRoutes>
        } ></Route>
        <Route path="/product" element={
          <ProtectedRoutes>
            <Product></Product>
          </ProtectedRoutes>} ></Route>
      </Routes>


    </div>
  );
}

export default App;
