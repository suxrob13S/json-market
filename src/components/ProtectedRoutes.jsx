import { Navigate } from "react-router-dom"
import Navbar from "../layout/Navbar"
import Sidebar from "../layout/Sidebar"

function ProtectedRoutes({ children }) {
    const token = localStorage.getItem("token")

    if (!token) {
        return <Navigate to={'/'} ></Navigate>
    } else {
        return (
            <div style={{ alignItems: "center",display: "flex", width: "100%", height: "100vh", background:"rgb(162, 184, 210)"  }}>
                <Sidebar></Sidebar>
                <div style={{  width: "100%", height: "100%" }} >
                    <Navbar></Navbar>
                    {children}
                </div>
            </div>
        )
    }
}

export default ProtectedRoutes;