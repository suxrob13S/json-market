import { Navigate } from "react-router-dom"
import Navbar from "../layout/Navbar"
import Sidebar from "../layout/Sidebar"

function ProtectedRoutes({children}){
    const token = localStorage.getItem("token")

    if(!token){
        return <Navigate to={'/'} ></Navigate>
    }else{
        return (
            <div style={{width:"100%",height:"100vh"}}>
            <Navbar></Navbar>
            <div style={{display:"flex",alignItems:"center",width:"100%",height:"100%"}} >
                <Sidebar></Sidebar>
                {children}
            </div>
            </div>
        )
    }
}

export default ProtectedRoutes;